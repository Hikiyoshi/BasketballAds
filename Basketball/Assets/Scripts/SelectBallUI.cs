using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class SelectBallUI : MonoBehaviour
{
    [SerializeField] private SelectBall selectBall;
    [SerializeField] private Button ArrowBtn;
    [SerializeField] private Button okBtn;
    [SerializeField] private Button randomBtn;
    // Start is called before the first frame update
    void Start()
    {
        ArrowBtn.onClick.AddListener(ChangeNextBall);
        okBtn.onClick.AddListener(ChangeBall);
        randomBtn.onClick.AddListener(RandomBall);
    }

    private void RandomBall()
    {
        int ballAmount = selectBall.GetBallAmount();

        int ballIndex = UnityEngine.Random.Range(0, ballAmount);

        selectBall.ScrollBall(ballIndex);
    }

    private void ChangeBall()
    {
        GameManager.Instance.HideSelectBall();
        selectBall.ChangeSkinBall();
    }

    private void ChangeNextBall()
    {
        selectBall.ScrollBall(selectBall.currentBallIndex + 1);
    }
}
