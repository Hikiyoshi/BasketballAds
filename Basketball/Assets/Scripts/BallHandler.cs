using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BallHandler : MonoBehaviour
{
    private Rigidbody rb;

    private bool checkedTopTrigger = false;
    private bool isPerfect = true;

    private void Start()
    {
        rb = GetComponent<Rigidbody>();
    }

    private void FixedUpdate()
    {
        rb.AddForce(Vector3.down * 9.8f, ForceMode.Force);
    }

    void OnTriggerEnter(Collider other)
    {
        if (other.name == "dunkTriggerTop")
        {
            checkedTopTrigger = true;
        }

        if (checkedTopTrigger && other.name == "dunkTriggerBottom")
        {
            checkedTopTrigger = false;

            GameManager.dunkType dunkType = GameManager.dunkType.normal;

            if (isPerfect)
            {
                dunkType = GameManager.dunkType.perfect;
            }

            GameManager.Instance.PlusPoint(dunkType);
            
            isPerfect = true;
        }
    }

    void OnCollisionEnter(Collision collision)
    {
        if (collision.transform.tag == "checkPerfectTag")
        {
            isPerfect = false;
        }
    }
}
