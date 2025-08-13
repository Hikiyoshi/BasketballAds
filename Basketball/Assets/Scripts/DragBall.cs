using System.Collections.Generic;
using UnityEngine;

public class DragBall : MonoBehaviour
{
    private bool isHolding, isThrow;
    private Transform currentBallTransform;
    private Touch touch;

    [SerializeField] private LayerMask ballMask;

    [SerializeField] private float forceThrown;
    
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
                break;

            case TouchPhase.Canceled:
            case TouchPhase.Ended:
                EndTouch();
                break;
        }
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

        Vector3 touchPosBaseZ = new Vector3(touchPos.x, touchPos.y, distZ);
        Vector3 newPos = Camera.main.ScreenToWorldPoint(touchPosBaseZ);
        currentBallTransform.position = newPos;
    }

    private void EndTouch()
    {
        //Throw the ball if holding 
        if (isHolding)
        {
            isThrow = true;

            currentBallTransform.GetComponent<Collider>().enabled = true;
            Rigidbody rb = currentBallTransform.GetComponent<Rigidbody>();
            rb.isKinematic = false;

            //Calculate force to thrown
            rb.AddForce(new Vector3(0, 1, 2) * forceThrown, ForceMode.Impulse);

            isThrow = false;
            isHolding = false;
        }
    }
}
