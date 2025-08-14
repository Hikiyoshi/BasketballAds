using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SelectBall : MonoBehaviour
{
    [SerializeField] private Material ballMaterial;

    [SerializeField] private List<BallScriptableObject> ballScriptableObjects = new List<BallScriptableObject>();
    [SerializeField] private List<Transform> ballTransform = new List<Transform>();
    [SerializeField] private BallScriptableObject currentBall;
    [SerializeField] private SelectBallUI selectBallUI;

    [SerializeField] private Transform ballselectionTransform;

    [SerializeField] private int ballAmount = 8;
    [SerializeField] private float scrollSpeed = 5f;

    public int currentBallIndex { get; private set; }
    public bool isRotating { get; private set; }

    private float anglePerBall;
    private Vector3 targetRotation;
    private Transform currentBallGameObject;

    private void Start()
    {
        anglePerBall = 360 / ballAmount;

        targetRotation = new Vector3(0f, ballselectionTransform.localRotation.y + -(currentBallIndex * anglePerBall), 0f);

        currentBallGameObject = ballTransform[currentBallIndex];
        float randomAngle = Random.Range(0f, 360f);
        currentBallGameObject.Rotate(randomAngle, randomAngle, randomAngle);
    }

    private void Update()
    {
        if (isRotating)
        {
            Quaternion rotation = Quaternion.Euler(targetRotation);
            ballselectionTransform.rotation = Quaternion.Slerp(ballselectionTransform.rotation, rotation, scrollSpeed * Time.deltaTime);
        }

        if (Quaternion.Angle(ballselectionTransform.rotation, Quaternion.Euler(targetRotation)) < 0.1f)
        {
            isRotating = false;
        }

        if (currentBallGameObject == null)
        {
            return;
        }

        currentBallGameObject.Rotate(new Vector3(1, 1, 1) * 20f * Time.deltaTime);
    }

    public void ScrollBall(int index)
    {
        if (index >= ballAmount)
        {
            index = 0;
        }

        if (index < 0)
        {
            index = ballAmount - 1;
        }

        currentBallIndex = index;

        float angle = -currentBallIndex * anglePerBall;

        targetRotation = new Vector3(0f, ballselectionTransform.localRotation.y + angle, 0f);

        currentBallGameObject = ballTransform[currentBallIndex];

        float randomAngle = Random.Range(0f, 360f);
        currentBallGameObject.Rotate(randomAngle, randomAngle, randomAngle);

        isRotating = true;

        selectBallUI.UpdateSetText();
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
