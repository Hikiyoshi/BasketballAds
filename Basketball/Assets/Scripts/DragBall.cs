using System;
using System.Collections.Generic;
using UnityEngine;

public class DragBall : MonoBehaviour
{
    private bool isHolding;
    private Transform currentBallTransform;
    private Touch touch;

    [SerializeField] private GameObject touchTrailGameObject;
    [SerializeField] private LayerMask ballMask;

    [SerializeField] private float forceThrown;

    private void Start()
    {
        touchTrailGameObject.SetActive(false);
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
        touchTrailGameObject.transform.position = Camera.main.ScreenToWorldPoint(new Vector3(touchPos.x, touchPos.y, 17f));
        touchTrailGameObject.SetActive(true);
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
            }
        }
    }

    private void HoldingBall(Vector3 touchPos)
    {
        currentBallTransform.gameObject.GetComponent<Rigidbody>().isKinematic = true;
        currentBallTransform.GetComponent<Collider>().enabled = false;

        float distZ = currentBallTransform.position.z - Camera.main.transform.position.z;
        Debug.Log(distZ);

        Vector3 touchPosBaseZ = new Vector3(touchPos.x, touchPos.y, distZ);
        Vector3 newPos = Camera.main.ScreenToWorldPoint(touchPosBaseZ);
        currentBallTransform.position = newPos;
    }

    private void EndTouch()
    {
        //Throw the ball if holding 
        if (isHolding)
        {
            currentBallTransform.GetComponent<Collider>().enabled = true;
            Rigidbody rb = currentBallTransform.GetComponent<Rigidbody>();
            rb.isKinematic = false;

            //Calculate force to thrown
            rb.AddForce(new Vector3(0, 1, 1.5f) * forceThrown, ForceMode.Impulse);

            isHolding = false;
        }

        //End Touch Trail
        touchTrailGameObject.SetActive(false);
    }
}
