using System;
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;

public class GameManager : MonoBehaviour
{
    public static GameManager Instance;

    [Header("References"), Space]
    [SerializeField] private TextMeshPro scoreText;
    [SerializeField] private TextMeshPro timeText;
    [SerializeField] private TextMeshPro highestText;

    [Header("VFX"), Space]
    [SerializeField] private ParticleSystem perfectParticle;

    [Header("Settings"), Space]
    //playTime equal -1 when infinity play
    [SerializeField] private float playTime;
    [SerializeField] private int normalDunkScore = 1;
    [SerializeField] private int perfectDunkScore = 2;

    public enum dunkType
    {
        normal,
        perfect,
    }

    private float score = 0;
    private float highestScore = 0;
    private float _playTime;

    private void Awake()
    {
        if (Instance != null)
        {
            Debug.LogError("Another GameManager Exist, Destroy This GameManager");
            Destroy(this);
            return;
        }

        _playTime = playTime;
        scoreText.text = score.ToString();

        Instance = this;
    }

    private void Update()
    {
        if (_playTime == -1f)
        {
            return;            
        }

        _playTime -= Time.deltaTime;
        timeText.text = ((int)_playTime).ToString();

        if (_playTime <= 0)
        {
            Debug.Log("Game Over");
        }
    }

    public void PlusPoint(dunkType dunkType)
    {
        int plusScore = normalDunkScore;

        if (dunkType == dunkType.perfect)
        {
            perfectParticle.Play();
            plusScore = perfectDunkScore;
        }

        score += plusScore;

        scoreText.text = score.ToString();

        Debug.Log("Score: " + score);
    }
}
