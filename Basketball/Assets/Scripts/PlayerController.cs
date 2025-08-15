using System;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    public bool canHoldBall { get; private set; }

    [SerializeField] private GameObject touchTrailGameObject;
    [SerializeField] private Transform ballselectionTransform;
    [SerializeField] private LayerMask ballMask;
    [SerializeField] private SelectBall selectBall;

    [SerializeField] private float forceThrown;
    [SerializeField] private float forceTorque;
    [SerializeField] private float maxDistanceVerticle;
    [SerializeField] private float maxDistanceHorizontal;

    private Touch touch;
    private bool isHolding;
    private bool canSelectBall;
    private Transform currentBallTransform;
    private Vector3 startTouchPos;
    private float distZ;

    private void Start()
    {
        touchTrailGameObject.SetActive(false);
        canHoldBall = true;
    }

    private void Update()
    {
        if (Input.touchCount == 0)
        {
            return;
        }

        touch = Input.touches[0];

        Vector3 touchPos = touch.position;

        switch (touch.phase)
        {
            case TouchPhase.Began:
                BeginTouch(touchPos);
                break;

            case TouchPhase.Stationary:
                startTouchPos = touch.position;
                break;

            case TouchPhase.Moved:
                // if (isHolding)
                // {
                //     HoldingBall(touchPos);
                // }
                Swiping(touchPos);
                break;

            case TouchPhase.Canceled:
            case TouchPhase.Ended:
                EndTouch();
                break;
        }
    }

    private void Swiping(Vector3 touchPos)
    {
        //Handle Touch Trail
        touchTrailGameObject.transform.position = Camera.main.ScreenToWorldPoint(new Vector3(touchPos.x, touchPos.y, 22f));
        touchTrailGameObject.SetActive(true);

        //Handle Ball Selection
        if (!canSelectBall)
        {
            return;
        }

        float distanceY = startTouchPos.x - touchPos.x;

        int currentBallIndex = selectBall.currentBallIndex;

        if (distanceY > 40f)
        {
            selectBall.ScrollBall(--currentBallIndex);
        }
        else if (distanceY < -40f)
        {
            selectBall.ScrollBall(++currentBallIndex);
        }

        startTouchPos = touch.position;
    }

    private void FixedUpdate()
    {
        if (isHolding)
        {
            HoldingBall(touch.position);
        }
    }

    private void BeginTouch(Vector3 touchPos)
    {
        startTouchPos = touch.position;

        if (!canHoldBall)
        {
            return;
        }

        //Handle Check Hold Ball
        Ray ray = Camera.main.ScreenPointToRay(touchPos);

        RaycastHit hit;
        if (Physics.Raycast(ray, out hit, Mathf.Infinity, ballMask))
        {
            Debug.DrawLine(ray.origin, hit.point);
            if (hit.collider.tag == "ballTag")
            {
                isHolding = true;

                currentBallTransform = hit.transform;

                distZ = currentBallTransform.position.z - Camera.main.transform.position.z;
            }
        }
    }

    private void HoldingBall(Vector3 touchPos)
    {
        currentBallTransform.gameObject.GetComponent<Rigidbody>().isKinematic = true;
        currentBallTransform.GetComponent<Collider>().enabled = false;

        Debug.Log(distZ);

        Vector3 touchPosBaseZ = new Vector3(touchPos.x, touchPos.y, distZ);
        Vector3 newPos = Camera.main.ScreenToWorldPoint(touchPosBaseZ);

        currentBallTransform.position = newPos;
    }

    private void EndTouch()
    {
        //End Touch Trail
        touchTrailGameObject.SetActive(false);

        //Throw the ball if holding 
        if (isHolding)
        {
            currentBallTransform.GetComponent<Collider>().enabled = true;
            Rigidbody rb = currentBallTransform.GetComponent<Rigidbody>();
            rb.isKinematic = false;

            //Calculate force to thrown
            float distanceX = startTouchPos.x - touch.position.x;
            float distanceY = startTouchPos.y - touch.position.y;

            Debug.Log("Verticle: " + distanceY + "Horizontal: " + distanceX);

            distanceX = Mathf.Clamp(distanceX, -maxDistanceHorizontal, maxDistanceHorizontal);
            distanceY = Mathf.Clamp(distanceY, -maxDistanceVerticle, maxDistanceVerticle);

            float distVerticle = 0.1f;

            if (distanceY < 0)
            {
                distVerticle = ConvertValue(distanceY, 0f, maxDistanceVerticle, 0f, 1f);
            }

            float distHorizontal = ConvertValue(distanceX, 0f, maxDistanceHorizontal, 0f, .2f);

            Vector3 direction = new Vector3(-distHorizontal, -distVerticle, .7f);
            Debug.Log(direction);
            rb.AddForce(direction * forceThrown, ForceMode.Impulse);
            rb.AddTorque(Vector3.right * forceTorque, ForceMode.Impulse);

            isHolding = false;
        }
    }

    private float ConvertValue(float value, float min, float max)
    {
        return (value - min) / (max - min);
    }
    private float ConvertValue(float value, float oldmin, float oldmax, float newmin, float newmax)
    {
        return newmin + ((value - oldmin) * (newmax - newmin) / (oldmax - oldmin));
    }

    public void SetHoldBall(bool canHold)
    {
        canHoldBall = canHold;
    }
    public void SetCanSelect(bool canSelect)
    {
        canSelectBall = canSelect;
    }
    
}
