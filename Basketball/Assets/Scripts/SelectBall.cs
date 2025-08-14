using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SelectBall : MonoBehaviour
{
    [SerializeField] private Material ballMaterial;

    [SerializeField] private List<BallScriptableObject> ballScriptableObjects = new List<BallScriptableObject>();
    [SerializeField] private BallScriptableObject currentBall;

    [SerializeField] private Transform ballselectionTransform;

    [SerializeField] private int ballAmount = 8;
    [SerializeField] private float scrollSpeed = 5f;

    public int currentBallIndex { get; private set; }

    private float anglePerBall;
    private bool isRotate;
    private Vector3 targetRotation;

    private void Start()
    {
        anglePerBall = 360 / ballAmount;
    }

    private void Update()
    {
        if (isRotate)
        {
            Quaternion rotation = Quaternion.Euler(targetRotation);
            ballselectionTransform.rotation = Quaternion.Slerp(ballselectionTransform.rotation, rotation, scrollSpeed * Time.deltaTime);
        }

        if (ballselectionTransform.rotation == Quaternion.Euler(targetRotation))
        {
            isRotate = false;
        }
    }

    public void ScrollBall(int index)
    {
        if (index >= ballAmount)
        {
            index = 0;
        }

        currentBallIndex = index;

        float angle = -currentBallIndex * anglePerBall;

        targetRotation = new Vector3(0f, ballselectionTransform.localRotation.y + angle, 0f);

        isRotate = true;
    }

    public void ChangeSkinBall()
    {
        foreach (BallScriptableObject ball in ballScriptableObjects)
        {
            if (currentBallIndex == ball.ballIndex)
            {
                currentBall = ball;
                break;
            }
        }

        ballMaterial.mainTexture = currentBall.ballTexture;
    }

    public int GetBallAmount()
    {
        return ballAmount;
    }
}
