using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(fileName = "Ball", menuName = "ScriptableObjects/Ball")]
public class BallScriptableObject : ScriptableObject
{
    public int ballIndex;
    public string name;
    public Texture ballTexture;
}
