using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SoundManager : MonoBehaviour
{
    [SerializeField] private AudioSource music;
    [SerializeField] private Transform gameCompleteSfxPrefab;
    [SerializeField] private Transform gameCompleteMusicPrefab;
    [SerializeField] private Transform ballCollideSfxPrefab;
    [SerializeField] private Transform basketPerfectSfxPrefab;
    [SerializeField] private Transform strikeCheer2SfxPrefab;

    private void Start()
    {
        GameManager.Instance.OnBallCollide += GameManager_OnBallCOllide;
        GameManager.Instance.OnPerfect += GameManager_OnPerfect;
        GameManager.Instance.OnGameComplete += GameManager_OnGameComplete;
        GameManager.Instance.OnGameStart += GameManager_OnGameStart;

        music.Play();
    }

    private void GameManager_OnBallCOllide()
    {
        Transform sfxTransform = Instantiate(ballCollideSfxPrefab);
        sfxTransform.SetParent(transform);

        Destroy(sfxTransform.gameObject, 5f);
    }

    private void GameManager_OnPerfect()
    {
        Transform sfxTransform = Instantiate(basketPerfectSfxPrefab);
        sfxTransform.SetParent(transform);

        Destroy(sfxTransform.gameObject, 5f);
    }

    private void GameManager_OnGameStart()
    {
        music.Play();
    }

    private void GameManager_OnGameComplete()
    {
        music.Pause();

        Transform sfxTransform = Instantiate(gameCompleteSfxPrefab);
        sfxTransform.SetParent(transform);

        Destroy(sfxTransform.gameObject, 10f);

        Transform sfx1Transform = Instantiate(gameCompleteMusicPrefab);
        sfx1Transform.SetParent(transform);
        Destroy(sfx1Transform.gameObject, 10f);
    }
}
