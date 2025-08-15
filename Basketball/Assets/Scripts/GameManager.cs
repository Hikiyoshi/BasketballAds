using System;
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;

public class GameManager : MonoBehaviour
{
    public static GameManager Instance;

    public event Action OnBallCollide;
    public event Action OnPerfect;
    public event Action OnGameStart;
    public event Action OnGameComplete;

    [Header("References"), Space]
    [SerializeField] private TextMeshPro scoreText;
    [SerializeField] private TextMeshPro timeText;
    [SerializeField] private TextMeshPro highestText;
    [SerializeField] private TextMeshProUGUI scoreGameOverText;
    [SerializeField] private TextMeshProUGUI highestGameOverText;
    [SerializeField] private GameObject selectBallGameObject;
    [SerializeField] private GameObject perfectTextGameObject;
    [SerializeField] private GameObject gameoverUIGameObject;
    [SerializeField] private GameObject buttonPanelGameObject;
    [SerializeField] private GameObject newHightScoreImageGameObject;
    [SerializeField] private PlayerController player;

    [Header("VFX"), Space]
    [SerializeField] private ParticleSystem perfectParticle;
    [SerializeField] private ParticleSystem ChainLightsFull;

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
    private bool canCountTime = true;

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

        ChainLightsFull.Play();
    }

    private void Update()
    {
        if (_playTime == -1f)
        {
            canCountTime = false;
        }
        
        if (!canCountTime)
        {
            return;
        }

        _playTime -= Time.deltaTime;
        timeText.text = ((int)_playTime).ToString();

        if (_playTime <= 0)
        {
            GameOver();
        }
    }

    private void GameOver()
    {
        Debug.Log("Game Over");

        canCountTime = false;

        // Time.timeScale = 0;

        OnGameComplete?.Invoke();

        gameoverUIGameObject.SetActive(true);

        if (highestScore < score)
        {
            highestScore = score;
            newHightScoreImageGameObject.SetActive(true);
        }
        else
        {
            newHightScoreImageGameObject.SetActive(false);
        }

        scoreGameOverText.text = "Score: " + score;
        highestGameOverText.text = "Highest: " + highestScore;
    }

    private void SetUpScore()
    {
        _playTime = playTime;

        scoreText.text = score.ToString();
        timeText.text = ((int)_playTime).ToString();
        highestText.text = highestScore.ToString();
    }

    public void StartGame()
    {
        canCountTime = true;

        score = 0;

        SetUpScore();

        gameoverUIGameObject.SetActive(false);

        OnGameStart?.Invoke();
    }

    public void QuitGame()
    {
        Application.Quit();
    }

    public void PlusPoint(dunkType dunkType)
    {
        int plusScore = normalDunkScore;

        if (dunkType == dunkType.perfect)
        {
            perfectParticle.Play();
            OnPerfect?.Invoke();

            StartCoroutine(showPerfectText());

            plusScore = perfectDunkScore;
        }

        score += plusScore;

        scoreText.text = score.ToString();

        Debug.Log("Score: " + score);
    }

    private IEnumerator showPerfectText()
    {
        perfectTextGameObject.SetActive(true);

        yield return new WaitForSeconds(.5f);

        perfectTextGameObject.SetActive(false);
    }

    public void showSelectBall()
    {
        canCountTime = false;

        player.SetHoldBall(false);
        player.SetCanSelect(true);

        StartCoroutine(WaitBeforeSet());

        ChainLightsFull.Pause();
    }

    private IEnumerator WaitBeforeSet()
    {
        buttonPanelGameObject.GetComponent<Animator>().SetTrigger("play");

        yield return new WaitForSeconds(.4f);

        selectBallGameObject.SetActive(true);
    }

    public void HideSelectBall()
    {
        canCountTime = true;

        player.SetHoldBall(true);
        player.SetCanSelect(false);

        buttonPanelGameObject.GetComponent<Animator>().SetTrigger("play");

        selectBallGameObject.SetActive(false);

        ChainLightsFull.Play();
    }

    public void PlaySfxBallCollide()
    {
        OnBallCollide?.Invoke();
    }
}
