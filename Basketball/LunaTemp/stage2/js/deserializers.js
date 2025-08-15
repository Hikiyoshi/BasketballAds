var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.JointSpring' )
  var i643 = data
  i642.spring = i643[0]
  i642.damper = i643[1]
  i642.targetPosition = i643[2]
  return i642
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.JointMotor' )
  var i645 = data
  i644.m_TargetVelocity = i645[0]
  i644.m_Force = i645[1]
  i644.m_FreeSpin = i645[2]
  return i644
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.JointLimits' )
  var i647 = data
  i646.m_Min = i647[0]
  i646.m_Max = i647[1]
  i646.m_Bounciness = i647[2]
  i646.m_BounceMinVelocity = i647[3]
  i646.m_ContactDistance = i647[4]
  i646.minBounce = i647[5]
  i646.maxBounce = i647[6]
  return i646
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.JointDrive' )
  var i649 = data
  i648.m_PositionSpring = i649[0]
  i648.m_PositionDamper = i649[1]
  i648.m_MaximumForce = i649[2]
  i648.m_UseAcceleration = i649[3]
  return i648
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i651 = data
  i650.m_Spring = i651[0]
  i650.m_Damper = i651[1]
  return i650
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i653 = data
  i652.m_Limit = i653[0]
  i652.m_Bounciness = i653[1]
  i652.m_ContactDistance = i653[2]
  return i652
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i655 = data
  i654.m_ExtremumSlip = i655[0]
  i654.m_ExtremumValue = i655[1]
  i654.m_AsymptoteSlip = i655[2]
  i654.m_AsymptoteValue = i655[3]
  i654.m_Stiffness = i655[4]
  return i654
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i657 = data
  i656.m_LowerAngle = i657[0]
  i656.m_UpperAngle = i657[1]
  return i656
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i659 = data
  i658.m_MotorSpeed = i659[0]
  i658.m_MaximumMotorTorque = i659[1]
  return i658
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i661 = data
  i660.m_DampingRatio = i661[0]
  i660.m_Frequency = i661[1]
  i660.m_Angle = i661[2]
  return i660
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i663 = data
  i662.m_LowerTranslation = i663[0]
  i662.m_UpperTranslation = i663[1]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i664 = root || new pc.UnityMaterial()
  var i665 = data
  i664.name = i665[0]
  request.r(i665[1], i665[2], 0, i664, 'shader')
  i664.renderQueue = i665[3]
  i664.enableInstancing = !!i665[4]
  var i667 = i665[5]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i667[i + 0]) );
  }
  i664.floatParameters = i666
  var i669 = i665[6]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i669[i + 0]) );
  }
  i664.colorParameters = i668
  var i671 = i665[7]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i671[i + 0]) );
  }
  i664.vectorParameters = i670
  var i673 = i665[8]
  var i672 = []
  for(var i = 0; i < i673.length; i += 1) {
    i672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i673[i + 0]) );
  }
  i664.textureParameters = i672
  var i675 = i665[9]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i675[i + 0]) );
  }
  i664.materialFlags = i674
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i679 = data
  i678.name = i679[0]
  i678.value = i679[1]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i683 = data
  i682.name = i683[0]
  i682.value = new pc.Color(i683[1], i683[2], i683[3], i683[4])
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i687 = data
  i686.name = i687[0]
  i686.value = new pc.Vec4( i687[1], i687[2], i687[3], i687[4] )
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i691 = data
  i690.name = i691[0]
  request.r(i691[1], i691[2], 0, i690, 'value')
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i695 = data
  i694.name = i695[0]
  i694.enabled = !!i695[1]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i697 = data
  i696.name = i697[0]
  i696.halfPrecision = !!i697[1]
  i696.useUInt32IndexFormat = !!i697[2]
  i696.vertexCount = i697[3]
  i696.aabb = i697[4]
  var i699 = i697[5]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( !!i699[i + 0] );
  }
  i696.streams = i698
  i696.vertices = i697[6]
  var i701 = i697[7]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i701[i + 0]) );
  }
  i696.subMeshes = i700
  var i703 = i697[8]
  var i702 = []
  for(var i = 0; i < i703.length; i += 16) {
    i702.push( new pc.Mat4().setData(i703[i + 0], i703[i + 1], i703[i + 2], i703[i + 3],  i703[i + 4], i703[i + 5], i703[i + 6], i703[i + 7],  i703[i + 8], i703[i + 9], i703[i + 10], i703[i + 11],  i703[i + 12], i703[i + 13], i703[i + 14], i703[i + 15]) );
  }
  i696.bindposes = i702
  var i705 = i697[9]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i705[i + 0]) );
  }
  i696.blendShapes = i704
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i711 = data
  i710.triangles = i711[0]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i717 = data
  i716.name = i717[0]
  var i719 = i717[1]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i719[i + 0]) );
  }
  i716.frames = i718
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i721 = data
  i720.name = i721[0]
  i720.width = i721[1]
  i720.height = i721[2]
  i720.mipmapCount = i721[3]
  i720.anisoLevel = i721[4]
  i720.filterMode = i721[5]
  i720.hdr = !!i721[6]
  i720.format = i721[7]
  i720.wrapMode = i721[8]
  i720.alphaIsTransparency = !!i721[9]
  i720.alphaSource = i721[10]
  i720.graphicsFormat = i721[11]
  i720.sRGBTexture = !!i721[12]
  i720.desiredColorSpace = i721[13]
  i720.wrapU = i721[14]
  i720.wrapV = i721[15]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i723 = data
  i722.position = new pc.Vec3( i723[0], i723[1], i723[2] )
  i722.scale = new pc.Vec3( i723[3], i723[4], i723[5] )
  i722.rotation = new pc.Quat(i723[6], i723[7], i723[8], i723[9])
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i725 = data
  request.r(i725[0], i725[1], 0, i724, 'sharedMesh')
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i727 = data
  request.r(i727[0], i727[1], 0, i726, 'additionalVertexStreams')
  i726.enabled = !!i727[2]
  request.r(i727[3], i727[4], 0, i726, 'sharedMaterial')
  var i729 = i727[5]
  var i728 = []
  for(var i = 0; i < i729.length; i += 2) {
  request.r(i729[i + 0], i729[i + 1], 2, i728, '')
  }
  i726.sharedMaterials = i728
  i726.receiveShadows = !!i727[6]
  i726.shadowCastingMode = i727[7]
  i726.sortingLayerID = i727[8]
  i726.sortingOrder = i727[9]
  i726.lightmapIndex = i727[10]
  i726.lightmapSceneIndex = i727[11]
  i726.lightmapScaleOffset = new pc.Vec4( i727[12], i727[13], i727[14], i727[15] )
  i726.lightProbeUsage = i727[16]
  i726.reflectionProbeUsage = i727[17]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i733 = data
  i732.name = i733[0]
  i732.tagId = i733[1]
  i732.enabled = !!i733[2]
  i732.isStatic = !!i733[3]
  i732.layer = i733[4]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.RenderTexture"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.RenderTexture' )
  var i735 = data
  i734.name = i735[0]
  i734.width = i735[1]
  i734.height = i735[2]
  i734.anisoLevel = i735[3]
  i734.filterMode = i735[4]
  i734.hdr = !!i735[5]
  i734.colorFormat = i735[6]
  i734.depthStencilFormat = i735[7]
  i734.renderTextureFormat = i735[8]
  i734.depth = i735[9]
  i734.wrapU = i735[10]
  i734.wrapV = i735[11]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i737 = data
  i736.pivot = new pc.Vec2( i737[0], i737[1] )
  i736.anchorMin = new pc.Vec2( i737[2], i737[3] )
  i736.anchorMax = new pc.Vec2( i737[4], i737[5] )
  i736.sizeDelta = new pc.Vec2( i737[6], i737[7] )
  i736.anchoredPosition3D = new pc.Vec3( i737[8], i737[9], i737[10] )
  i736.rotation = new pc.Quat(i737[11], i737[12], i737[13], i737[14])
  i736.scale = new pc.Vec3( i737[15], i737[16], i737[17] )
  return i736
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i738 = root || request.c( 'TMPro.TextMeshPro' )
  var i739 = data
  i738._SortingLayer = i739[0]
  i738._SortingLayerID = i739[1]
  i738._SortingOrder = i739[2]
  i738.m_hasFontAssetChanged = !!i739[3]
  request.r(i739[4], i739[5], 0, i738, 'm_renderer')
  i738.m_maskType = i739[6]
  i738.m_text = i739[7]
  i738.m_isRightToLeft = !!i739[8]
  request.r(i739[9], i739[10], 0, i738, 'm_fontAsset')
  request.r(i739[11], i739[12], 0, i738, 'm_sharedMaterial')
  var i741 = i739[13]
  var i740 = []
  for(var i = 0; i < i741.length; i += 2) {
  request.r(i741[i + 0], i741[i + 1], 2, i740, '')
  }
  i738.m_fontSharedMaterials = i740
  request.r(i739[14], i739[15], 0, i738, 'm_fontMaterial')
  var i743 = i739[16]
  var i742 = []
  for(var i = 0; i < i743.length; i += 2) {
  request.r(i743[i + 0], i743[i + 1], 2, i742, '')
  }
  i738.m_fontMaterials = i742
  i738.m_fontColor32 = UnityEngine.Color32.ConstructColor(i739[17], i739[18], i739[19], i739[20])
  i738.m_fontColor = new pc.Color(i739[21], i739[22], i739[23], i739[24])
  i738.m_enableVertexGradient = !!i739[25]
  i738.m_colorMode = i739[26]
  i738.m_fontColorGradient = request.d('TMPro.VertexGradient', i739[27], i738.m_fontColorGradient)
  request.r(i739[28], i739[29], 0, i738, 'm_fontColorGradientPreset')
  request.r(i739[30], i739[31], 0, i738, 'm_spriteAsset')
  i738.m_tintAllSprites = !!i739[32]
  request.r(i739[33], i739[34], 0, i738, 'm_StyleSheet')
  i738.m_TextStyleHashCode = i739[35]
  i738.m_overrideHtmlColors = !!i739[36]
  i738.m_faceColor = UnityEngine.Color32.ConstructColor(i739[37], i739[38], i739[39], i739[40])
  i738.m_fontSize = i739[41]
  i738.m_fontSizeBase = i739[42]
  i738.m_fontWeight = i739[43]
  i738.m_enableAutoSizing = !!i739[44]
  i738.m_fontSizeMin = i739[45]
  i738.m_fontSizeMax = i739[46]
  i738.m_fontStyle = i739[47]
  i738.m_HorizontalAlignment = i739[48]
  i738.m_VerticalAlignment = i739[49]
  i738.m_textAlignment = i739[50]
  i738.m_characterSpacing = i739[51]
  i738.m_wordSpacing = i739[52]
  i738.m_lineSpacing = i739[53]
  i738.m_lineSpacingMax = i739[54]
  i738.m_paragraphSpacing = i739[55]
  i738.m_charWidthMaxAdj = i739[56]
  i738.m_enableWordWrapping = !!i739[57]
  i738.m_wordWrappingRatios = i739[58]
  i738.m_overflowMode = i739[59]
  request.r(i739[60], i739[61], 0, i738, 'm_linkedTextComponent')
  request.r(i739[62], i739[63], 0, i738, 'parentLinkedComponent')
  i738.m_enableKerning = !!i739[64]
  i738.m_enableExtraPadding = !!i739[65]
  i738.checkPaddingRequired = !!i739[66]
  i738.m_isRichText = !!i739[67]
  i738.m_parseCtrlCharacters = !!i739[68]
  i738.m_isOrthographic = !!i739[69]
  i738.m_isCullingEnabled = !!i739[70]
  i738.m_horizontalMapping = i739[71]
  i738.m_verticalMapping = i739[72]
  i738.m_uvLineOffset = i739[73]
  i738.m_geometrySortingOrder = i739[74]
  i738.m_IsTextObjectScaleStatic = !!i739[75]
  i738.m_VertexBufferAutoSizeReduction = !!i739[76]
  i738.m_useMaxVisibleDescender = !!i739[77]
  i738.m_pageToDisplay = i739[78]
  i738.m_margin = new pc.Vec4( i739[79], i739[80], i739[81], i739[82] )
  i738.m_isUsingLegacyAnimationComponent = !!i739[83]
  i738.m_isVolumetricText = !!i739[84]
  i738.m_Maskable = !!i739[85]
  request.r(i739[86], i739[87], 0, i738, 'm_Material')
  i738.m_Color = new pc.Color(i739[88], i739[89], i739[90], i739[91])
  i738.m_RaycastTarget = !!i739[92]
  i738.m_RaycastPadding = new pc.Vec4( i739[93], i739[94], i739[95], i739[96] )
  return i738
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i744 = root || request.c( 'TMPro.VertexGradient' )
  var i745 = data
  i744.topLeft = new pc.Color(i745[0], i745[1], i745[2], i745[3])
  i744.topRight = new pc.Color(i745[4], i745[5], i745[6], i745[7])
  i744.bottomLeft = new pc.Color(i745[8], i745[9], i745[10], i745[11])
  i744.bottomRight = new pc.Color(i745[12], i745[13], i745[14], i745[15])
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i747 = data
  request.r(i747[0], i747[1], 0, i746, 'clip')
  request.r(i747[2], i747[3], 0, i746, 'outputAudioMixerGroup')
  i746.playOnAwake = !!i747[4]
  i746.loop = !!i747[5]
  i746.time = i747[6]
  i746.volume = i747[7]
  i746.pitch = i747[8]
  i746.enabled = !!i747[9]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i749 = data
  i748.name = i749[0]
  i748.atlasId = i749[1]
  i748.mipmapCount = i749[2]
  i748.hdr = !!i749[3]
  i748.size = i749[4]
  i748.anisoLevel = i749[5]
  i748.filterMode = i749[6]
  var i751 = i749[7]
  var i750 = []
  for(var i = 0; i < i751.length; i += 4) {
    i750.push( UnityEngine.Rect.MinMaxRect(i751[i + 0], i751[i + 1], i751[i + 2], i751[i + 3]) );
  }
  i748.rects = i750
  i748.wrapU = i749[8]
  i748.wrapV = i749[9]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i755 = data
  i754.name = i755[0]
  i754.index = i755[1]
  i754.startup = !!i755[2]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i757 = data
  i756.center = new pc.Vec3( i757[0], i757[1], i757[2] )
  i756.size = new pc.Vec3( i757[3], i757[4], i757[5] )
  i756.enabled = !!i757[6]
  i756.isTrigger = !!i757[7]
  request.r(i757[8], i757[9], 0, i756, 'material')
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i759 = data
  i758.type = i759[0]
  i758.color = new pc.Color(i759[1], i759[2], i759[3], i759[4])
  i758.cullingMask = i759[5]
  i758.intensity = i759[6]
  i758.range = i759[7]
  i758.spotAngle = i759[8]
  i758.shadows = i759[9]
  i758.shadowNormalBias = i759[10]
  i758.shadowBias = i759[11]
  i758.shadowStrength = i759[12]
  i758.shadowResolution = i759[13]
  i758.lightmapBakeType = i759[14]
  i758.renderMode = i759[15]
  request.r(i759[16], i759[17], 0, i758, 'cookie')
  i758.cookieSize = i759[18]
  i758.enabled = !!i759[19]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i761 = data
  i760.aspect = i761[0]
  i760.orthographic = !!i761[1]
  i760.orthographicSize = i761[2]
  i760.backgroundColor = new pc.Color(i761[3], i761[4], i761[5], i761[6])
  i760.nearClipPlane = i761[7]
  i760.farClipPlane = i761[8]
  i760.fieldOfView = i761[9]
  i760.depth = i761[10]
  i760.clearFlags = i761[11]
  i760.cullingMask = i761[12]
  i760.rect = i761[13]
  request.r(i761[14], i761[15], 0, i760, 'targetTexture')
  i760.usePhysicalProperties = !!i761[16]
  i760.focalLength = i761[17]
  i760.sensorSize = new pc.Vec2( i761[18], i761[19] )
  i760.lensShift = new pc.Vec2( i761[20], i761[21] )
  i760.gateFit = i761[22]
  i760.commandBufferCount = i761[23]
  i760.cameraType = i761[24]
  i760.enabled = !!i761[25]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i763 = data
  i762.center = new pc.Vec3( i763[0], i763[1], i763[2] )
  i762.radius = i763[3]
  i762.enabled = !!i763[4]
  i762.isTrigger = !!i763[5]
  request.r(i763[6], i763[7], 0, i762, 'material')
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i765 = data
  i764.mass = i765[0]
  i764.drag = i765[1]
  i764.angularDrag = i765[2]
  i764.useGravity = !!i765[3]
  i764.isKinematic = !!i765[4]
  i764.constraints = i765[5]
  i764.maxAngularVelocity = i765[6]
  i764.collisionDetectionMode = i765[7]
  i764.interpolation = i765[8]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i767 = data
  var i769 = i767[0]
  var i768 = []
  for(var i = 0; i < i769.length; i += 3) {
    i768.push( new pc.Vec3( i769[i + 0], i769[i + 1], i769[i + 2] ) );
  }
  i766.positions = i768
  i766.positionCount = i767[1]
  i766.time = i767[2]
  i766.startWidth = i767[3]
  i766.endWidth = i767[4]
  i766.widthMultiplier = i767[5]
  i766.autodestruct = !!i767[6]
  i766.emitting = !!i767[7]
  i766.numCornerVertices = i767[8]
  i766.numCapVertices = i767[9]
  i766.minVertexDistance = i767[10]
  i766.colorGradient = i767[11] ? new pc.ColorGradient(i767[11][0], i767[11][1], i767[11][2]) : null
  i766.startColor = new pc.Color(i767[12], i767[13], i767[14], i767[15])
  i766.endColor = new pc.Color(i767[16], i767[17], i767[18], i767[19])
  i766.generateLightingData = !!i767[20]
  i766.textureMode = i767[21]
  i766.alignment = i767[22]
  i766.widthCurve = new pc.AnimationCurve( { keys_flow: i767[23] } )
  i766.enabled = !!i767[24]
  request.r(i767[25], i767[26], 0, i766, 'sharedMaterial')
  var i771 = i767[27]
  var i770 = []
  for(var i = 0; i < i771.length; i += 2) {
  request.r(i771[i + 0], i771[i + 1], 2, i770, '')
  }
  i766.sharedMaterials = i770
  i766.receiveShadows = !!i767[28]
  i766.shadowCastingMode = i767[29]
  i766.sortingLayerID = i767[30]
  i766.sortingOrder = i767[31]
  i766.lightmapIndex = i767[32]
  i766.lightmapSceneIndex = i767[33]
  i766.lightmapScaleOffset = new pc.Vec4( i767[34], i767[35], i767[36], i767[37] )
  i766.lightProbeUsage = i767[38]
  i766.reflectionProbeUsage = i767[39]
  return i766
}

Deserializers["BallHandler"] = function (request, data, root) {
  var i774 = root || request.c( 'BallHandler' )
  var i775 = data
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i777 = data
  i776.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i777[0], i776.main)
  i776.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i777[1], i776.colorBySpeed)
  i776.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i777[2], i776.colorOverLifetime)
  i776.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i777[3], i776.emission)
  i776.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i777[4], i776.rotationBySpeed)
  i776.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i777[5], i776.rotationOverLifetime)
  i776.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i777[6], i776.shape)
  i776.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i777[7], i776.sizeBySpeed)
  i776.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i777[8], i776.sizeOverLifetime)
  i776.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i777[9], i776.textureSheetAnimation)
  i776.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i777[10], i776.velocityOverLifetime)
  i776.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i777[11], i776.noise)
  i776.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i777[12], i776.inheritVelocity)
  i776.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i777[13], i776.forceOverLifetime)
  i776.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i777[14], i776.limitVelocityOverLifetime)
  i776.useAutoRandomSeed = !!i777[15]
  i776.randomSeed = i777[16]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i778 = root || new pc.ParticleSystemMain()
  var i779 = data
  i778.duration = i779[0]
  i778.loop = !!i779[1]
  i778.prewarm = !!i779[2]
  i778.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[3], i778.startDelay)
  i778.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[4], i778.startLifetime)
  i778.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[5], i778.startSpeed)
  i778.startSize3D = !!i779[6]
  i778.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[7], i778.startSizeX)
  i778.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[8], i778.startSizeY)
  i778.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[9], i778.startSizeZ)
  i778.startRotation3D = !!i779[10]
  i778.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[11], i778.startRotationX)
  i778.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[12], i778.startRotationY)
  i778.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[13], i778.startRotationZ)
  i778.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i779[14], i778.startColor)
  i778.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[15], i778.gravityModifier)
  i778.simulationSpace = i779[16]
  request.r(i779[17], i779[18], 0, i778, 'customSimulationSpace')
  i778.simulationSpeed = i779[19]
  i778.useUnscaledTime = !!i779[20]
  i778.scalingMode = i779[21]
  i778.playOnAwake = !!i779[22]
  i778.maxParticles = i779[23]
  i778.emitterVelocityMode = i779[24]
  i778.stopAction = i779[25]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i780 = root || new pc.MinMaxCurve()
  var i781 = data
  i780.mode = i781[0]
  i780.curveMin = new pc.AnimationCurve( { keys_flow: i781[1] } )
  i780.curveMax = new pc.AnimationCurve( { keys_flow: i781[2] } )
  i780.curveMultiplier = i781[3]
  i780.constantMin = i781[4]
  i780.constantMax = i781[5]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i782 = root || new pc.MinMaxGradient()
  var i783 = data
  i782.mode = i783[0]
  i782.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i783[1], i782.gradientMin)
  i782.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i783[2], i782.gradientMax)
  i782.colorMin = new pc.Color(i783[3], i783[4], i783[5], i783[6])
  i782.colorMax = new pc.Color(i783[7], i783[8], i783[9], i783[10])
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i785 = data
  i784.mode = i785[0]
  var i787 = i785[1]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i787[i + 0]) );
  }
  i784.colorKeys = i786
  var i789 = i785[2]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i789[i + 0]) );
  }
  i784.alphaKeys = i788
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i790 = root || new pc.ParticleSystemColorBySpeed()
  var i791 = data
  i790.enabled = !!i791[0]
  i790.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i791[1], i790.color)
  i790.range = new pc.Vec2( i791[2], i791[3] )
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i795 = data
  i794.color = new pc.Color(i795[0], i795[1], i795[2], i795[3])
  i794.time = i795[4]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i799 = data
  i798.alpha = i799[0]
  i798.time = i799[1]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i800 = root || new pc.ParticleSystemColorOverLifetime()
  var i801 = data
  i800.enabled = !!i801[0]
  i800.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i801[1], i800.color)
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i802 = root || new pc.ParticleSystemEmitter()
  var i803 = data
  i802.enabled = !!i803[0]
  i802.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[1], i802.rateOverTime)
  i802.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[2], i802.rateOverDistance)
  var i805 = i803[3]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i805[i + 0]) );
  }
  i802.bursts = i804
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i808 = root || new pc.ParticleSystemBurst()
  var i809 = data
  i808.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[0], i808.count)
  i808.cycleCount = i809[1]
  i808.minCount = i809[2]
  i808.maxCount = i809[3]
  i808.repeatInterval = i809[4]
  i808.time = i809[5]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i810 = root || new pc.ParticleSystemRotationBySpeed()
  var i811 = data
  i810.enabled = !!i811[0]
  i810.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[1], i810.x)
  i810.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[2], i810.y)
  i810.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[3], i810.z)
  i810.separateAxes = !!i811[4]
  i810.range = new pc.Vec2( i811[5], i811[6] )
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i812 = root || new pc.ParticleSystemRotationOverLifetime()
  var i813 = data
  i812.enabled = !!i813[0]
  i812.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[1], i812.x)
  i812.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[2], i812.y)
  i812.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[3], i812.z)
  i812.separateAxes = !!i813[4]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i814 = root || new pc.ParticleSystemShape()
  var i815 = data
  i814.enabled = !!i815[0]
  i814.shapeType = i815[1]
  i814.randomDirectionAmount = i815[2]
  i814.sphericalDirectionAmount = i815[3]
  i814.randomPositionAmount = i815[4]
  i814.alignToDirection = !!i815[5]
  i814.radius = i815[6]
  i814.radiusMode = i815[7]
  i814.radiusSpread = i815[8]
  i814.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[9], i814.radiusSpeed)
  i814.radiusThickness = i815[10]
  i814.angle = i815[11]
  i814.length = i815[12]
  i814.boxThickness = new pc.Vec3( i815[13], i815[14], i815[15] )
  i814.meshShapeType = i815[16]
  request.r(i815[17], i815[18], 0, i814, 'mesh')
  request.r(i815[19], i815[20], 0, i814, 'meshRenderer')
  request.r(i815[21], i815[22], 0, i814, 'skinnedMeshRenderer')
  i814.useMeshMaterialIndex = !!i815[23]
  i814.meshMaterialIndex = i815[24]
  i814.useMeshColors = !!i815[25]
  i814.normalOffset = i815[26]
  i814.arc = i815[27]
  i814.arcMode = i815[28]
  i814.arcSpread = i815[29]
  i814.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[30], i814.arcSpeed)
  i814.donutRadius = i815[31]
  i814.position = new pc.Vec3( i815[32], i815[33], i815[34] )
  i814.rotation = new pc.Vec3( i815[35], i815[36], i815[37] )
  i814.scale = new pc.Vec3( i815[38], i815[39], i815[40] )
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i816 = root || new pc.ParticleSystemSizeBySpeed()
  var i817 = data
  i816.enabled = !!i817[0]
  i816.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[1], i816.x)
  i816.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[2], i816.y)
  i816.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[3], i816.z)
  i816.separateAxes = !!i817[4]
  i816.range = new pc.Vec2( i817[5], i817[6] )
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i818 = root || new pc.ParticleSystemSizeOverLifetime()
  var i819 = data
  i818.enabled = !!i819[0]
  i818.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[1], i818.x)
  i818.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[2], i818.y)
  i818.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[3], i818.z)
  i818.separateAxes = !!i819[4]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i820 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i821 = data
  i820.enabled = !!i821[0]
  i820.mode = i821[1]
  i820.animation = i821[2]
  i820.numTilesX = i821[3]
  i820.numTilesY = i821[4]
  i820.useRandomRow = !!i821[5]
  i820.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[6], i820.frameOverTime)
  i820.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[7], i820.startFrame)
  i820.cycleCount = i821[8]
  i820.rowIndex = i821[9]
  i820.flipU = i821[10]
  i820.flipV = i821[11]
  i820.spriteCount = i821[12]
  var i823 = i821[13]
  var i822 = []
  for(var i = 0; i < i823.length; i += 2) {
  request.r(i823[i + 0], i823[i + 1], 2, i822, '')
  }
  i820.sprites = i822
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i826 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i827 = data
  i826.enabled = !!i827[0]
  i826.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[1], i826.x)
  i826.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[2], i826.y)
  i826.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[3], i826.z)
  i826.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[4], i826.radial)
  i826.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[5], i826.speedModifier)
  i826.space = i827[6]
  i826.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[7], i826.orbitalX)
  i826.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[8], i826.orbitalY)
  i826.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[9], i826.orbitalZ)
  i826.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[10], i826.orbitalOffsetX)
  i826.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[11], i826.orbitalOffsetY)
  i826.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[12], i826.orbitalOffsetZ)
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i828 = root || new pc.ParticleSystemNoise()
  var i829 = data
  i828.enabled = !!i829[0]
  i828.separateAxes = !!i829[1]
  i828.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[2], i828.strengthX)
  i828.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[3], i828.strengthY)
  i828.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[4], i828.strengthZ)
  i828.frequency = i829[5]
  i828.damping = !!i829[6]
  i828.octaveCount = i829[7]
  i828.octaveMultiplier = i829[8]
  i828.octaveScale = i829[9]
  i828.quality = i829[10]
  i828.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[11], i828.scrollSpeed)
  i828.scrollSpeedMultiplier = i829[12]
  i828.remapEnabled = !!i829[13]
  i828.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[14], i828.remapX)
  i828.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[15], i828.remapY)
  i828.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[16], i828.remapZ)
  i828.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[17], i828.positionAmount)
  i828.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[18], i828.rotationAmount)
  i828.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[19], i828.sizeAmount)
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i830 = root || new pc.ParticleSystemInheritVelocity()
  var i831 = data
  i830.enabled = !!i831[0]
  i830.mode = i831[1]
  i830.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[2], i830.curve)
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i832 = root || new pc.ParticleSystemForceOverLifetime()
  var i833 = data
  i832.enabled = !!i833[0]
  i832.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[1], i832.x)
  i832.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[2], i832.y)
  i832.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[3], i832.z)
  i832.space = i833[4]
  i832.randomized = !!i833[5]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i834 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i835 = data
  i834.enabled = !!i835[0]
  i834.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[1], i834.limit)
  i834.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[2], i834.limitX)
  i834.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[3], i834.limitY)
  i834.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[4], i834.limitZ)
  i834.dampen = i835[5]
  i834.separateAxes = !!i835[6]
  i834.space = i835[7]
  i834.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[8], i834.drag)
  i834.multiplyDragByParticleSize = !!i835[9]
  i834.multiplyDragByParticleVelocity = !!i835[10]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i837 = data
  request.r(i837[0], i837[1], 0, i836, 'mesh')
  i836.meshCount = i837[2]
  i836.activeVertexStreamsCount = i837[3]
  i836.alignment = i837[4]
  i836.renderMode = i837[5]
  i836.sortMode = i837[6]
  i836.lengthScale = i837[7]
  i836.velocityScale = i837[8]
  i836.cameraVelocityScale = i837[9]
  i836.normalDirection = i837[10]
  i836.sortingFudge = i837[11]
  i836.minParticleSize = i837[12]
  i836.maxParticleSize = i837[13]
  i836.pivot = new pc.Vec3( i837[14], i837[15], i837[16] )
  request.r(i837[17], i837[18], 0, i836, 'trailMaterial')
  i836.applyActiveColorSpace = !!i837[19]
  i836.enabled = !!i837[20]
  request.r(i837[21], i837[22], 0, i836, 'sharedMaterial')
  var i839 = i837[23]
  var i838 = []
  for(var i = 0; i < i839.length; i += 2) {
  request.r(i839[i + 0], i839[i + 1], 2, i838, '')
  }
  i836.sharedMaterials = i838
  i836.receiveShadows = !!i837[24]
  i836.shadowCastingMode = i837[25]
  i836.sortingLayerID = i837[26]
  i836.sortingOrder = i837[27]
  i836.lightmapIndex = i837[28]
  i836.lightmapSceneIndex = i837[29]
  i836.lightmapScaleOffset = new pc.Vec4( i837[30], i837[31], i837[32], i837[33] )
  i836.lightProbeUsage = i837[34]
  i836.reflectionProbeUsage = i837[35]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i841 = data
  request.r(i841[0], i841[1], 0, i840, 'animatorController')
  request.r(i841[2], i841[3], 0, i840, 'avatar')
  i840.updateMode = i841[4]
  i840.hasTransformHierarchy = !!i841[5]
  i840.applyRootMotion = !!i841[6]
  var i843 = i841[7]
  var i842 = []
  for(var i = 0; i < i843.length; i += 2) {
  request.r(i843[i + 0], i843[i + 1], 2, i842, '')
  }
  i840.humanBones = i842
  i840.enabled = !!i841[8]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint' )
  var i847 = data
  i846.useMotor = !!i847[0]
  i846.useLimits = !!i847[1]
  i846.useSpring = !!i847[2]
  i846.limits = request.d('UnityEngine.JointLimits', i847[3], i846.limits)
  i846.motor = request.d('UnityEngine.JointMotor', i847[4], i846.motor)
  i846.spring = request.d('UnityEngine.JointSpring', i847[5], i846.spring)
  request.r(i847[6], i847[7], 0, i846, 'connectedBody')
  i846.axis = new pc.Vec3( i847[8], i847[9], i847[10] )
  i846.anchor = new pc.Vec3( i847[11], i847[12], i847[13] )
  i846.connectedAnchor = new pc.Vec3( i847[14], i847[15], i847[16] )
  i846.autoConfigureConnectedAnchor = !!i847[17]
  i846.massScale = i847[18]
  i846.connectedMassScale = i847[19]
  i846.enableCollision = !!i847[20]
  i846.breakForce = i847[21]
  i846.breakTorque = i847[22]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i849 = data
  i848.center = new pc.Vec3( i849[0], i849[1], i849[2] )
  i848.radius = i849[3]
  i848.height = i849[4]
  i848.direction = i849[5]
  i848.enabled = !!i849[6]
  i848.isTrigger = !!i849[7]
  request.r(i849[8], i849[9], 0, i848, 'material')
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i851 = data
  request.r(i851[0], i851[1], 0, i850, 'sharedMesh')
  var i853 = i851[2]
  var i852 = []
  for(var i = 0; i < i853.length; i += 2) {
  request.r(i853[i + 0], i853[i + 1], 2, i852, '')
  }
  i850.bones = i852
  i850.updateWhenOffscreen = !!i851[3]
  i850.localBounds = i851[4]
  request.r(i851[5], i851[6], 0, i850, 'rootBone')
  var i855 = i851[7]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i855[i + 0]) );
  }
  i850.blendShapesWeights = i854
  i850.enabled = !!i851[8]
  request.r(i851[9], i851[10], 0, i850, 'sharedMaterial')
  var i857 = i851[11]
  var i856 = []
  for(var i = 0; i < i857.length; i += 2) {
  request.r(i857[i + 0], i857[i + 1], 2, i856, '')
  }
  i850.sharedMaterials = i856
  i850.receiveShadows = !!i851[12]
  i850.shadowCastingMode = i851[13]
  i850.sortingLayerID = i851[14]
  i850.sortingOrder = i851[15]
  i850.lightmapIndex = i851[16]
  i850.lightmapSceneIndex = i851[17]
  i850.lightmapScaleOffset = new pc.Vec4( i851[18], i851[19], i851[20], i851[21] )
  i850.lightProbeUsage = i851[22]
  i850.reflectionProbeUsage = i851[23]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i861 = data
  i860.weight = i861[0]
  return i860
}

Deserializers["SelectBall"] = function (request, data, root) {
  var i862 = root || request.c( 'SelectBall' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'ballMaterial')
  var i865 = i863[2]
  var i864 = new (System.Collections.Generic.List$1(Bridge.ns('BallScriptableObject')))
  for(var i = 0; i < i865.length; i += 2) {
  request.r(i865[i + 0], i865[i + 1], 1, i864, '')
  }
  i862.ballScriptableObjects = i864
  var i867 = i863[3]
  var i866 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i867.length; i += 2) {
  request.r(i867[i + 0], i867[i + 1], 1, i866, '')
  }
  i862.ballTransform = i866
  request.r(i863[4], i863[5], 0, i862, 'currentBall')
  request.r(i863[6], i863[7], 0, i862, 'selectBallUI')
  request.r(i863[8], i863[9], 0, i862, 'ballselectionTransform')
  i862.ballAmount = i863[10]
  i862.scrollSpeed = i863[11]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i873 = data
  i872.color = new pc.Color(i873[0], i873[1], i873[2], i873[3])
  request.r(i873[4], i873[5], 0, i872, 'sprite')
  i872.flipX = !!i873[6]
  i872.flipY = !!i873[7]
  i872.drawMode = i873[8]
  i872.size = new pc.Vec2( i873[9], i873[10] )
  i872.tileMode = i873[11]
  i872.adaptiveModeThreshold = i873[12]
  i872.maskInteraction = i873[13]
  i872.spriteSortPoint = i873[14]
  i872.enabled = !!i873[15]
  request.r(i873[16], i873[17], 0, i872, 'sharedMaterial')
  var i875 = i873[18]
  var i874 = []
  for(var i = 0; i < i875.length; i += 2) {
  request.r(i875[i + 0], i875[i + 1], 2, i874, '')
  }
  i872.sharedMaterials = i874
  i872.receiveShadows = !!i873[19]
  i872.shadowCastingMode = i873[20]
  i872.sortingLayerID = i873[21]
  i872.sortingOrder = i873[22]
  i872.lightmapIndex = i873[23]
  i872.lightmapSceneIndex = i873[24]
  i872.lightmapScaleOffset = new pc.Vec4( i873[25], i873[26], i873[27], i873[28] )
  i872.lightProbeUsage = i873[29]
  i872.reflectionProbeUsage = i873[30]
  return i872
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i876 = root || request.c( 'PlayerController' )
  var i877 = data
  request.r(i877[0], i877[1], 0, i876, 'touchTrailGameObject')
  request.r(i877[2], i877[3], 0, i876, 'ballselectionTransform')
  i876.ballMask = UnityEngine.LayerMask.FromIntegerValue( i877[4] )
  request.r(i877[5], i877[6], 0, i876, 'selectBall')
  i876.forceThrown = i877[7]
  i876.forceTorque = i877[8]
  i876.maxDistanceVerticle = i877[9]
  i876.maxDistanceHorizontal = i877[10]
  return i876
}

Deserializers["GameManager"] = function (request, data, root) {
  var i878 = root || request.c( 'GameManager' )
  var i879 = data
  request.r(i879[0], i879[1], 0, i878, 'scoreText')
  request.r(i879[2], i879[3], 0, i878, 'timeText')
  request.r(i879[4], i879[5], 0, i878, 'highestText')
  request.r(i879[6], i879[7], 0, i878, 'scoreGameOverText')
  request.r(i879[8], i879[9], 0, i878, 'highestGameOverText')
  request.r(i879[10], i879[11], 0, i878, 'selectBallGameObject')
  request.r(i879[12], i879[13], 0, i878, 'perfectTextGameObject')
  request.r(i879[14], i879[15], 0, i878, 'gameoverUIGameObject')
  request.r(i879[16], i879[17], 0, i878, 'buttonPanelGameObject')
  request.r(i879[18], i879[19], 0, i878, 'newHightScoreImageGameObject')
  request.r(i879[20], i879[21], 0, i878, 'player')
  request.r(i879[22], i879[23], 0, i878, 'perfectParticle')
  request.r(i879[24], i879[25], 0, i878, 'ChainLightsFull')
  i878.playTime = i879[26]
  i878.normalDunkScore = i879[27]
  i878.perfectDunkScore = i879[28]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i881 = data
  i880.planeDistance = i881[0]
  i880.referencePixelsPerUnit = i881[1]
  i880.isFallbackOverlay = !!i881[2]
  i880.renderMode = i881[3]
  i880.renderOrder = i881[4]
  i880.sortingLayerName = i881[5]
  i880.sortingOrder = i881[6]
  i880.scaleFactor = i881[7]
  request.r(i881[8], i881[9], 0, i880, 'worldCamera')
  i880.overrideSorting = !!i881[10]
  i880.pixelPerfect = !!i881[11]
  i880.targetDisplay = i881[12]
  i880.overridePixelPerfect = !!i881[13]
  i880.enabled = !!i881[14]
  return i880
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i882 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i883 = data
  i882.m_UiScaleMode = i883[0]
  i882.m_ReferencePixelsPerUnit = i883[1]
  i882.m_ScaleFactor = i883[2]
  i882.m_ReferenceResolution = new pc.Vec2( i883[3], i883[4] )
  i882.m_ScreenMatchMode = i883[5]
  i882.m_MatchWidthOrHeight = i883[6]
  i882.m_PhysicalUnit = i883[7]
  i882.m_FallbackScreenDPI = i883[8]
  i882.m_DefaultSpriteDPI = i883[9]
  i882.m_DynamicPixelsPerUnit = i883[10]
  i882.m_PresetInfoIsWorld = !!i883[11]
  return i882
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i884 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i885 = data
  i884.m_IgnoreReversedGraphics = !!i885[0]
  i884.m_BlockingObjects = i885[1]
  i884.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i885[2] )
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i887 = data
  i886.cullTransparentMesh = !!i887[0]
  return i886
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i888 = root || request.c( 'UnityEngine.UI.Image' )
  var i889 = data
  request.r(i889[0], i889[1], 0, i888, 'm_Sprite')
  i888.m_Type = i889[2]
  i888.m_PreserveAspect = !!i889[3]
  i888.m_FillCenter = !!i889[4]
  i888.m_FillMethod = i889[5]
  i888.m_FillAmount = i889[6]
  i888.m_FillClockwise = !!i889[7]
  i888.m_FillOrigin = i889[8]
  i888.m_UseSpriteMesh = !!i889[9]
  i888.m_PixelsPerUnitMultiplier = i889[10]
  i888.m_Maskable = !!i889[11]
  request.r(i889[12], i889[13], 0, i888, 'm_Material')
  i888.m_Color = new pc.Color(i889[14], i889[15], i889[16], i889[17])
  i888.m_RaycastTarget = !!i889[18]
  i888.m_RaycastPadding = new pc.Vec4( i889[19], i889[20], i889[21], i889[22] )
  return i888
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i890 = root || request.c( 'UnityEngine.UI.Button' )
  var i891 = data
  i890.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i891[0], i890.m_OnClick)
  i890.m_Navigation = request.d('UnityEngine.UI.Navigation', i891[1], i890.m_Navigation)
  i890.m_Transition = i891[2]
  i890.m_Colors = request.d('UnityEngine.UI.ColorBlock', i891[3], i890.m_Colors)
  i890.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i891[4], i890.m_SpriteState)
  i890.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i891[5], i890.m_AnimationTriggers)
  i890.m_Interactable = !!i891[6]
  request.r(i891[7], i891[8], 0, i890, 'm_TargetGraphic')
  return i890
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i892 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i893 = data
  i892.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i893[0], i892.m_PersistentCalls)
  return i892
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i894 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i895 = data
  var i897 = i895[0]
  var i896 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i897.length; i += 1) {
    i896.add(request.d('UnityEngine.Events.PersistentCall', i897[i + 0]));
  }
  i894.m_Calls = i896
  return i894
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, 'm_Target')
  i900.m_TargetAssemblyTypeName = i901[2]
  i900.m_MethodName = i901[3]
  i900.m_Mode = i901[4]
  i900.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i901[5], i900.m_Arguments)
  i900.m_CallState = i901[6]
  return i900
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i903 = data
  request.r(i903[0], i903[1], 0, i902, 'm_ObjectArgument')
  i902.m_ObjectArgumentAssemblyTypeName = i903[2]
  i902.m_IntArgument = i903[3]
  i902.m_FloatArgument = i903[4]
  i902.m_StringArgument = i903[5]
  i902.m_BoolArgument = !!i903[6]
  return i902
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i905 = data
  i904.m_Mode = i905[0]
  i904.m_WrapAround = !!i905[1]
  request.r(i905[2], i905[3], 0, i904, 'm_SelectOnUp')
  request.r(i905[4], i905[5], 0, i904, 'm_SelectOnDown')
  request.r(i905[6], i905[7], 0, i904, 'm_SelectOnLeft')
  request.r(i905[8], i905[9], 0, i904, 'm_SelectOnRight')
  return i904
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i906 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i907 = data
  i906.m_NormalColor = new pc.Color(i907[0], i907[1], i907[2], i907[3])
  i906.m_HighlightedColor = new pc.Color(i907[4], i907[5], i907[6], i907[7])
  i906.m_PressedColor = new pc.Color(i907[8], i907[9], i907[10], i907[11])
  i906.m_SelectedColor = new pc.Color(i907[12], i907[13], i907[14], i907[15])
  i906.m_DisabledColor = new pc.Color(i907[16], i907[17], i907[18], i907[19])
  i906.m_ColorMultiplier = i907[20]
  i906.m_FadeDuration = i907[21]
  return i906
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i908 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'm_HighlightedSprite')
  request.r(i909[2], i909[3], 0, i908, 'm_PressedSprite')
  request.r(i909[4], i909[5], 0, i908, 'm_SelectedSprite')
  request.r(i909[6], i909[7], 0, i908, 'm_DisabledSprite')
  return i908
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i910 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i911 = data
  i910.m_NormalTrigger = i911[0]
  i910.m_HighlightedTrigger = i911[1]
  i910.m_PressedTrigger = i911[2]
  i910.m_SelectedTrigger = i911[3]
  i910.m_DisabledTrigger = i911[4]
  return i910
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i912 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i913 = data
  i912.m_hasFontAssetChanged = !!i913[0]
  request.r(i913[1], i913[2], 0, i912, 'm_baseMaterial')
  i912.m_maskOffset = new pc.Vec4( i913[3], i913[4], i913[5], i913[6] )
  i912.m_text = i913[7]
  i912.m_isRightToLeft = !!i913[8]
  request.r(i913[9], i913[10], 0, i912, 'm_fontAsset')
  request.r(i913[11], i913[12], 0, i912, 'm_sharedMaterial')
  var i915 = i913[13]
  var i914 = []
  for(var i = 0; i < i915.length; i += 2) {
  request.r(i915[i + 0], i915[i + 1], 2, i914, '')
  }
  i912.m_fontSharedMaterials = i914
  request.r(i913[14], i913[15], 0, i912, 'm_fontMaterial')
  var i917 = i913[16]
  var i916 = []
  for(var i = 0; i < i917.length; i += 2) {
  request.r(i917[i + 0], i917[i + 1], 2, i916, '')
  }
  i912.m_fontMaterials = i916
  i912.m_fontColor32 = UnityEngine.Color32.ConstructColor(i913[17], i913[18], i913[19], i913[20])
  i912.m_fontColor = new pc.Color(i913[21], i913[22], i913[23], i913[24])
  i912.m_enableVertexGradient = !!i913[25]
  i912.m_colorMode = i913[26]
  i912.m_fontColorGradient = request.d('TMPro.VertexGradient', i913[27], i912.m_fontColorGradient)
  request.r(i913[28], i913[29], 0, i912, 'm_fontColorGradientPreset')
  request.r(i913[30], i913[31], 0, i912, 'm_spriteAsset')
  i912.m_tintAllSprites = !!i913[32]
  request.r(i913[33], i913[34], 0, i912, 'm_StyleSheet')
  i912.m_TextStyleHashCode = i913[35]
  i912.m_overrideHtmlColors = !!i913[36]
  i912.m_faceColor = UnityEngine.Color32.ConstructColor(i913[37], i913[38], i913[39], i913[40])
  i912.m_fontSize = i913[41]
  i912.m_fontSizeBase = i913[42]
  i912.m_fontWeight = i913[43]
  i912.m_enableAutoSizing = !!i913[44]
  i912.m_fontSizeMin = i913[45]
  i912.m_fontSizeMax = i913[46]
  i912.m_fontStyle = i913[47]
  i912.m_HorizontalAlignment = i913[48]
  i912.m_VerticalAlignment = i913[49]
  i912.m_textAlignment = i913[50]
  i912.m_characterSpacing = i913[51]
  i912.m_wordSpacing = i913[52]
  i912.m_lineSpacing = i913[53]
  i912.m_lineSpacingMax = i913[54]
  i912.m_paragraphSpacing = i913[55]
  i912.m_charWidthMaxAdj = i913[56]
  i912.m_enableWordWrapping = !!i913[57]
  i912.m_wordWrappingRatios = i913[58]
  i912.m_overflowMode = i913[59]
  request.r(i913[60], i913[61], 0, i912, 'm_linkedTextComponent')
  request.r(i913[62], i913[63], 0, i912, 'parentLinkedComponent')
  i912.m_enableKerning = !!i913[64]
  i912.m_enableExtraPadding = !!i913[65]
  i912.checkPaddingRequired = !!i913[66]
  i912.m_isRichText = !!i913[67]
  i912.m_parseCtrlCharacters = !!i913[68]
  i912.m_isOrthographic = !!i913[69]
  i912.m_isCullingEnabled = !!i913[70]
  i912.m_horizontalMapping = i913[71]
  i912.m_verticalMapping = i913[72]
  i912.m_uvLineOffset = i913[73]
  i912.m_geometrySortingOrder = i913[74]
  i912.m_IsTextObjectScaleStatic = !!i913[75]
  i912.m_VertexBufferAutoSizeReduction = !!i913[76]
  i912.m_useMaxVisibleDescender = !!i913[77]
  i912.m_pageToDisplay = i913[78]
  i912.m_margin = new pc.Vec4( i913[79], i913[80], i913[81], i913[82] )
  i912.m_isUsingLegacyAnimationComponent = !!i913[83]
  i912.m_isVolumetricText = !!i913[84]
  i912.m_Maskable = !!i913[85]
  request.r(i913[86], i913[87], 0, i912, 'm_Material')
  i912.m_Color = new pc.Color(i913[88], i913[89], i913[90], i913[91])
  i912.m_RaycastTarget = !!i913[92]
  i912.m_RaycastPadding = new pc.Vec4( i913[93], i913[94], i913[95], i913[96] )
  return i912
}

Deserializers["SelectBallUI"] = function (request, data, root) {
  var i918 = root || request.c( 'SelectBallUI' )
  var i919 = data
  request.r(i919[0], i919[1], 0, i918, 'selectBall')
  request.r(i919[2], i919[3], 0, i918, 'ArrowBtn')
  request.r(i919[4], i919[5], 0, i918, 'okBtn')
  request.r(i919[6], i919[7], 0, i918, 'randomBtn')
  request.r(i919[8], i919[9], 0, i918, 'setText')
  request.r(i919[10], i919[11], 0, i918, 'selectImageGameObject')
  return i918
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i920 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i921 = data
  request.r(i921[0], i921[1], 0, i920, 'm_Texture')
  i920.m_UVRect = UnityEngine.Rect.MinMaxRect(i921[2], i921[3], i921[4], i921[5])
  i920.m_Maskable = !!i921[6]
  request.r(i921[7], i921[8], 0, i920, 'm_Material')
  i920.m_Color = new pc.Color(i921[9], i921[10], i921[11], i921[12])
  i920.m_RaycastTarget = !!i921[13]
  i920.m_RaycastPadding = new pc.Vec4( i921[14], i921[15], i921[16], i921[17] )
  return i920
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i922 = root || request.c( 'UnityEngine.UI.Outline' )
  var i923 = data
  i922.m_EffectColor = new pc.Color(i923[0], i923[1], i923[2], i923[3])
  i922.m_EffectDistance = new pc.Vec2( i923[4], i923[5] )
  i922.m_UseGraphicAlpha = !!i923[6]
  return i922
}

Deserializers["UnityEngine.UI.Shadow"] = function (request, data, root) {
  var i924 = root || request.c( 'UnityEngine.UI.Shadow' )
  var i925 = data
  i924.m_EffectColor = new pc.Color(i925[0], i925[1], i925[2], i925[3])
  i924.m_EffectDistance = new pc.Vec2( i925[4], i925[5] )
  i924.m_UseGraphicAlpha = !!i925[6]
  return i924
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i926 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i927 = data
  request.r(i927[0], i927[1], 0, i926, 'm_FirstSelected')
  i926.m_sendNavigationEvents = !!i927[2]
  i926.m_DragThreshold = i927[3]
  return i926
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i928 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i929 = data
  i928.m_HorizontalAxis = i929[0]
  i928.m_VerticalAxis = i929[1]
  i928.m_SubmitButton = i929[2]
  i928.m_CancelButton = i929[3]
  i928.m_InputActionsPerSecond = i929[4]
  i928.m_RepeatDelay = i929[5]
  i928.m_ForceModuleActive = !!i929[6]
  i928.m_SendPointerHoverToParent = !!i929[7]
  return i928
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i930 = root || request.c( 'SoundManager' )
  var i931 = data
  request.r(i931[0], i931[1], 0, i930, 'music')
  request.r(i931[2], i931[3], 0, i930, 'gameCompleteSfxPrefab')
  request.r(i931[4], i931[5], 0, i930, 'gameCompleteMusicPrefab')
  request.r(i931[6], i931[7], 0, i930, 'ballCollideSfxPrefab')
  request.r(i931[8], i931[9], 0, i930, 'basketPerfectSfxPrefab')
  request.r(i931[10], i931[11], 0, i930, 'strikeCheer2SfxPrefab')
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i933 = data
  i932.ambientIntensity = i933[0]
  i932.reflectionIntensity = i933[1]
  i932.ambientMode = i933[2]
  i932.ambientLight = new pc.Color(i933[3], i933[4], i933[5], i933[6])
  i932.ambientSkyColor = new pc.Color(i933[7], i933[8], i933[9], i933[10])
  i932.ambientGroundColor = new pc.Color(i933[11], i933[12], i933[13], i933[14])
  i932.ambientEquatorColor = new pc.Color(i933[15], i933[16], i933[17], i933[18])
  i932.fogColor = new pc.Color(i933[19], i933[20], i933[21], i933[22])
  i932.fogEndDistance = i933[23]
  i932.fogStartDistance = i933[24]
  i932.fogDensity = i933[25]
  i932.fog = !!i933[26]
  request.r(i933[27], i933[28], 0, i932, 'skybox')
  i932.fogMode = i933[29]
  var i935 = i933[30]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i935[i + 0]) );
  }
  i932.lightmaps = i934
  i932.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i933[31], i932.lightProbes)
  i932.lightmapsMode = i933[32]
  i932.mixedBakeMode = i933[33]
  i932.environmentLightingMode = i933[34]
  i932.ambientProbe = new pc.SphericalHarmonicsL2(i933[35])
  i932.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i933[36])
  i932.useReferenceAmbientProbe = !!i933[37]
  request.r(i933[38], i933[39], 0, i932, 'customReflection')
  request.r(i933[40], i933[41], 0, i932, 'defaultReflection')
  i932.defaultReflectionMode = i933[42]
  i932.defaultReflectionResolution = i933[43]
  i932.sunLightObjectId = i933[44]
  i932.pixelLightCount = i933[45]
  i932.defaultReflectionHDR = !!i933[46]
  i932.hasLightDataAsset = !!i933[47]
  i932.hasManualGenerate = !!i933[48]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i939 = data
  request.r(i939[0], i939[1], 0, i938, 'lightmapColor')
  request.r(i939[2], i939[3], 0, i938, 'lightmapDirection')
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i940 = root || new UnityEngine.LightProbes()
  var i941 = data
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i947 = data
  i946.name = i947[0]
  i946.bounciness = i947[1]
  i946.dynamicFriction = i947[2]
  i946.staticFriction = i947[3]
  i946.frictionCombine = i947[4]
  i946.bounceCombine = i947[5]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i949 = data
  var i951 = i949[0]
  var i950 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i951.length; i += 1) {
    i950.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i951[i + 0]));
  }
  i948.ShaderCompilationErrors = i950
  i948.name = i949[1]
  i948.guid = i949[2]
  var i953 = i949[3]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( i953[i + 0] );
  }
  i948.shaderDefinedKeywords = i952
  var i955 = i949[4]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i955[i + 0]) );
  }
  i948.passes = i954
  var i957 = i949[5]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i957[i + 0]) );
  }
  i948.usePasses = i956
  var i959 = i949[6]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i959[i + 0]) );
  }
  i948.defaultParameterValues = i958
  request.r(i949[7], i949[8], 0, i948, 'unityFallbackShader')
  i948.readDepth = !!i949[9]
  i948.isCreatedByShaderGraph = !!i949[10]
  i948.disableBatching = !!i949[11]
  i948.compiled = !!i949[12]
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i963 = data
  i962.shaderName = i963[0]
  i962.errorMessage = i963[1]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i968 = root || new pc.UnityShaderPass()
  var i969 = data
  i968.id = i969[0]
  i968.subShaderIndex = i969[1]
  i968.name = i969[2]
  i968.passType = i969[3]
  i968.grabPassTextureName = i969[4]
  i968.usePass = !!i969[5]
  i968.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i969[6], i968.zTest)
  i968.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i969[7], i968.zWrite)
  i968.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i969[8], i968.culling)
  i968.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i969[9], i968.blending)
  i968.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i969[10], i968.alphaBlending)
  i968.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i969[11], i968.colorWriteMask)
  i968.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i969[12], i968.offsetUnits)
  i968.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i969[13], i968.offsetFactor)
  i968.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i969[14], i968.stencilRef)
  i968.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i969[15], i968.stencilReadMask)
  i968.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i969[16], i968.stencilWriteMask)
  i968.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i969[17], i968.stencilOp)
  i968.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i969[18], i968.stencilOpFront)
  i968.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i969[19], i968.stencilOpBack)
  var i971 = i969[20]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i971[i + 0]) );
  }
  i968.tags = i970
  var i973 = i969[21]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( i973[i + 0] );
  }
  i968.passDefinedKeywords = i972
  var i975 = i969[22]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i975[i + 0]) );
  }
  i968.passDefinedKeywordGroups = i974
  var i977 = i969[23]
  var i976 = []
  for(var i = 0; i < i977.length; i += 1) {
    i976.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i977[i + 0]) );
  }
  i968.variants = i976
  var i979 = i969[24]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i979[i + 0]) );
  }
  i968.excludedVariants = i978
  i968.hasDepthReader = !!i969[25]
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i981 = data
  i980.val = i981[0]
  i980.name = i981[1]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i983 = data
  i982.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i983[0], i982.src)
  i982.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i983[1], i982.dst)
  i982.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i983[2], i982.op)
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i985 = data
  i984.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i985[0], i984.pass)
  i984.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i985[1], i984.fail)
  i984.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i985[2], i984.zFail)
  i984.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i985[3], i984.comp)
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i989 = data
  i988.name = i989[0]
  i988.value = i989[1]
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i993 = data
  var i995 = i993[0]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( i995[i + 0] );
  }
  i992.keywords = i994
  i992.hasDiscard = !!i993[1]
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i999 = data
  i998.passId = i999[0]
  i998.subShaderIndex = i999[1]
  var i1001 = i999[2]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.push( i1001[i + 0] );
  }
  i998.keywords = i1000
  i998.vertexProgram = i999[3]
  i998.fragmentProgram = i999[4]
  i998.exportedForWebGl2 = !!i999[5]
  i998.readDepth = !!i999[6]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1005 = data
  request.r(i1005[0], i1005[1], 0, i1004, 'shader')
  i1004.pass = i1005[2]
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1009 = data
  i1008.name = i1009[0]
  i1008.type = i1009[1]
  i1008.value = new pc.Vec4( i1009[2], i1009[3], i1009[4], i1009[5] )
  i1008.textureValue = i1009[6]
  i1008.shaderPropertyFlag = i1009[7]
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1011 = data
  i1010.name = i1011[0]
  request.r(i1011[1], i1011[2], 0, i1010, 'texture')
  i1010.aabb = i1011[3]
  i1010.vertices = i1011[4]
  i1010.triangles = i1011[5]
  i1010.textureRect = UnityEngine.Rect.MinMaxRect(i1011[6], i1011[7], i1011[8], i1011[9])
  i1010.packedRect = UnityEngine.Rect.MinMaxRect(i1011[10], i1011[11], i1011[12], i1011[13])
  i1010.border = new pc.Vec4( i1011[14], i1011[15], i1011[16], i1011[17] )
  i1010.transparency = i1011[18]
  i1010.bounds = i1011[19]
  i1010.pixelsPerUnit = i1011[20]
  i1010.textureWidth = i1011[21]
  i1010.textureHeight = i1011[22]
  i1010.nativeSize = new pc.Vec2( i1011[23], i1011[24] )
  i1010.pivot = new pc.Vec2( i1011[25], i1011[26] )
  i1010.textureRectOffset = new pc.Vec2( i1011[27], i1011[28] )
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1013 = data
  i1012.name = i1013[0]
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1015 = data
  i1014.name = i1015[0]
  i1014.wrapMode = i1015[1]
  i1014.isLooping = !!i1015[2]
  i1014.length = i1015[3]
  var i1017 = i1015[4]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1017[i + 0]) );
  }
  i1014.curves = i1016
  var i1019 = i1015[5]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1019[i + 0]) );
  }
  i1014.events = i1018
  i1014.halfPrecision = !!i1015[6]
  i1014._frameRate = i1015[7]
  i1014.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1015[8], i1014.localBounds)
  i1014.hasMuscleCurves = !!i1015[9]
  var i1021 = i1015[10]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( i1021[i + 0] );
  }
  i1014.clipMuscleConstant = i1020
  i1014.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1015[11], i1014.clipBindingConstant)
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1025 = data
  i1024.path = i1025[0]
  i1024.hash = i1025[1]
  i1024.componentType = i1025[2]
  i1024.property = i1025[3]
  i1024.keys = i1025[4]
  var i1027 = i1025[5]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1027[i + 0]) );
  }
  i1024.objectReferenceKeys = i1026
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1031 = data
  i1030.time = i1031[0]
  request.r(i1031[1], i1031[2], 0, i1030, 'value')
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1035 = data
  i1034.functionName = i1035[0]
  i1034.floatParameter = i1035[1]
  i1034.intParameter = i1035[2]
  i1034.stringParameter = i1035[3]
  request.r(i1035[4], i1035[5], 0, i1034, 'objectReferenceParameter')
  i1034.time = i1035[6]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1037 = data
  i1036.center = new pc.Vec3( i1037[0], i1037[1], i1037[2] )
  i1036.extends = new pc.Vec3( i1037[3], i1037[4], i1037[5] )
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1041 = data
  var i1043 = i1041[0]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( i1043[i + 0] );
  }
  i1040.genericBindings = i1042
  var i1045 = i1041[1]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( i1045[i + 0] );
  }
  i1040.pptrCurveMapping = i1044
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1047 = data
  i1046.name = i1047[0]
  i1046.ascent = i1047[1]
  i1046.originalLineHeight = i1047[2]
  i1046.fontSize = i1047[3]
  var i1049 = i1047[4]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1049[i + 0]) );
  }
  i1046.characterInfo = i1048
  request.r(i1047[5], i1047[6], 0, i1046, 'texture')
  i1046.originalFontSize = i1047[7]
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1053 = data
  i1052.index = i1053[0]
  i1052.advance = i1053[1]
  i1052.bearing = i1053[2]
  i1052.glyphWidth = i1053[3]
  i1052.glyphHeight = i1053[4]
  i1052.minX = i1053[5]
  i1052.maxX = i1053[6]
  i1052.minY = i1053[7]
  i1052.maxY = i1053[8]
  i1052.uvBottomLeftX = i1053[9]
  i1052.uvBottomLeftY = i1053[10]
  i1052.uvBottomRightX = i1053[11]
  i1052.uvBottomRightY = i1053[12]
  i1052.uvTopLeftX = i1053[13]
  i1052.uvTopLeftY = i1053[14]
  i1052.uvTopRightX = i1053[15]
  i1052.uvTopRightY = i1053[16]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1055 = data
  i1054.name = i1055[0]
  var i1057 = i1055[1]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1057[i + 0]) );
  }
  i1054.layers = i1056
  var i1059 = i1055[2]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1059[i + 0]) );
  }
  i1054.parameters = i1058
  i1054.animationClips = i1055[3]
  i1054.avatarUnsupported = i1055[4]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1063 = data
  i1062.name = i1063[0]
  i1062.defaultWeight = i1063[1]
  i1062.blendingMode = i1063[2]
  i1062.avatarMask = i1063[3]
  i1062.syncedLayerIndex = i1063[4]
  i1062.syncedLayerAffectsTiming = !!i1063[5]
  i1062.syncedLayers = i1063[6]
  i1062.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1063[7], i1062.stateMachine)
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1065 = data
  i1064.id = i1065[0]
  i1064.name = i1065[1]
  i1064.path = i1065[2]
  var i1067 = i1065[3]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1067[i + 0]) );
  }
  i1064.states = i1066
  var i1069 = i1065[4]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1069[i + 0]) );
  }
  i1064.machines = i1068
  var i1071 = i1065[5]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1071[i + 0]) );
  }
  i1064.entryStateTransitions = i1070
  var i1073 = i1065[6]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1073[i + 0]) );
  }
  i1064.exitStateTransitions = i1072
  var i1075 = i1065[7]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1075[i + 0]) );
  }
  i1064.anyStateTransitions = i1074
  i1064.defaultStateId = i1065[8]
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1079 = data
  i1078.id = i1079[0]
  i1078.name = i1079[1]
  i1078.cycleOffset = i1079[2]
  i1078.cycleOffsetParameter = i1079[3]
  i1078.cycleOffsetParameterActive = !!i1079[4]
  i1078.mirror = !!i1079[5]
  i1078.mirrorParameter = i1079[6]
  i1078.mirrorParameterActive = !!i1079[7]
  i1078.motionId = i1079[8]
  i1078.nameHash = i1079[9]
  i1078.fullPathHash = i1079[10]
  i1078.speed = i1079[11]
  i1078.speedParameter = i1079[12]
  i1078.speedParameterActive = !!i1079[13]
  i1078.tag = i1079[14]
  i1078.tagHash = i1079[15]
  i1078.writeDefaultValues = !!i1079[16]
  var i1081 = i1079[17]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 2) {
  request.r(i1081[i + 0], i1081[i + 1], 2, i1080, '')
  }
  i1078.behaviours = i1080
  var i1083 = i1079[18]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1083[i + 0]) );
  }
  i1078.transitions = i1082
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1089 = data
  i1088.fullPath = i1089[0]
  i1088.canTransitionToSelf = !!i1089[1]
  i1088.duration = i1089[2]
  i1088.exitTime = i1089[3]
  i1088.hasExitTime = !!i1089[4]
  i1088.hasFixedDuration = !!i1089[5]
  i1088.interruptionSource = i1089[6]
  i1088.offset = i1089[7]
  i1088.orderedInterruption = !!i1089[8]
  i1088.destinationStateId = i1089[9]
  i1088.isExit = !!i1089[10]
  i1088.mute = !!i1089[11]
  i1088.solo = !!i1089[12]
  var i1091 = i1089[13]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1091[i + 0]) );
  }
  i1088.conditions = i1090
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1097 = data
  i1096.destinationStateId = i1097[0]
  i1096.isExit = !!i1097[1]
  i1096.mute = !!i1097[2]
  i1096.solo = !!i1097[3]
  var i1099 = i1097[4]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1099[i + 0]) );
  }
  i1096.conditions = i1098
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1103 = data
  i1102.defaultBool = !!i1103[0]
  i1102.defaultFloat = i1103[1]
  i1102.defaultInt = i1103[2]
  i1102.name = i1103[3]
  i1102.nameHash = i1103[4]
  i1102.type = i1103[5]
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1107 = data
  i1106.mode = i1107[0]
  i1106.parameter = i1107[1]
  i1106.threshold = i1107[2]
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1109 = data
  i1108.name = i1109[0]
  i1108.bytes64 = i1109[1]
  i1108.data = i1109[2]
  return i1108
}

Deserializers["BallScriptableObject"] = function (request, data, root) {
  var i1110 = root || request.c( 'BallScriptableObject' )
  var i1111 = data
  i1110.ballIndex = i1111[0]
  i1110.name = i1111[1]
  request.r(i1111[2], i1111[3], 0, i1110, 'ballTexture')
  return i1110
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1112 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1113 = data
  request.r(i1113[0], i1113[1], 0, i1112, 'atlas')
  i1112.normalStyle = i1113[2]
  i1112.normalSpacingOffset = i1113[3]
  i1112.boldStyle = i1113[4]
  i1112.boldSpacing = i1113[5]
  i1112.italicStyle = i1113[6]
  i1112.tabSize = i1113[7]
  i1112.hashCode = i1113[8]
  request.r(i1113[9], i1113[10], 0, i1112, 'material')
  i1112.materialHashCode = i1113[11]
  i1112.m_Version = i1113[12]
  i1112.m_SourceFontFileGUID = i1113[13]
  request.r(i1113[14], i1113[15], 0, i1112, 'm_SourceFontFile_EditorRef')
  request.r(i1113[16], i1113[17], 0, i1112, 'm_SourceFontFile')
  i1112.m_AtlasPopulationMode = i1113[18]
  i1112.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1113[19], i1112.m_FaceInfo)
  var i1115 = i1113[20]
  var i1114 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.add(request.d('UnityEngine.TextCore.Glyph', i1115[i + 0]));
  }
  i1112.m_GlyphTable = i1114
  var i1117 = i1113[21]
  var i1116 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.add(request.d('TMPro.TMP_Character', i1117[i + 0]));
  }
  i1112.m_CharacterTable = i1116
  var i1119 = i1113[22]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 2) {
  request.r(i1119[i + 0], i1119[i + 1], 2, i1118, '')
  }
  i1112.m_AtlasTextures = i1118
  i1112.m_AtlasTextureIndex = i1113[23]
  i1112.m_IsMultiAtlasTexturesEnabled = !!i1113[24]
  i1112.m_ClearDynamicDataOnBuild = !!i1113[25]
  var i1121 = i1113[26]
  var i1120 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.add(request.d('UnityEngine.TextCore.GlyphRect', i1121[i + 0]));
  }
  i1112.m_UsedGlyphRects = i1120
  var i1123 = i1113[27]
  var i1122 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.add(request.d('UnityEngine.TextCore.GlyphRect', i1123[i + 0]));
  }
  i1112.m_FreeGlyphRects = i1122
  i1112.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1113[28], i1112.m_fontInfo)
  i1112.m_AtlasWidth = i1113[29]
  i1112.m_AtlasHeight = i1113[30]
  i1112.m_AtlasPadding = i1113[31]
  i1112.m_AtlasRenderMode = i1113[32]
  var i1125 = i1113[33]
  var i1124 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.add(request.d('TMPro.TMP_Glyph', i1125[i + 0]));
  }
  i1112.m_glyphInfoList = i1124
  i1112.m_KerningTable = request.d('TMPro.KerningTable', i1113[34], i1112.m_KerningTable)
  i1112.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1113[35], i1112.m_FontFeatureTable)
  var i1127 = i1113[36]
  var i1126 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1127.length; i += 2) {
  request.r(i1127[i + 0], i1127[i + 1], 1, i1126, '')
  }
  i1112.fallbackFontAssets = i1126
  var i1129 = i1113[37]
  var i1128 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1129.length; i += 2) {
  request.r(i1129[i + 0], i1129[i + 1], 1, i1128, '')
  }
  i1112.m_FallbackFontAssetTable = i1128
  i1112.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1113[38], i1112.m_CreationSettings)
  var i1131 = i1113[39]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( request.d('TMPro.TMP_FontWeightPair', i1131[i + 0]) );
  }
  i1112.m_FontWeightTable = i1130
  var i1133 = i1113[40]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( request.d('TMPro.TMP_FontWeightPair', i1133[i + 0]) );
  }
  i1112.fontWeights = i1132
  return i1112
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1134 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1135 = data
  i1134.m_FaceIndex = i1135[0]
  i1134.m_FamilyName = i1135[1]
  i1134.m_StyleName = i1135[2]
  i1134.m_PointSize = i1135[3]
  i1134.m_Scale = i1135[4]
  i1134.m_UnitsPerEM = i1135[5]
  i1134.m_LineHeight = i1135[6]
  i1134.m_AscentLine = i1135[7]
  i1134.m_CapLine = i1135[8]
  i1134.m_MeanLine = i1135[9]
  i1134.m_Baseline = i1135[10]
  i1134.m_DescentLine = i1135[11]
  i1134.m_SuperscriptOffset = i1135[12]
  i1134.m_SuperscriptSize = i1135[13]
  i1134.m_SubscriptOffset = i1135[14]
  i1134.m_SubscriptSize = i1135[15]
  i1134.m_UnderlineOffset = i1135[16]
  i1134.m_UnderlineThickness = i1135[17]
  i1134.m_StrikethroughOffset = i1135[18]
  i1134.m_StrikethroughThickness = i1135[19]
  i1134.m_TabWidth = i1135[20]
  return i1134
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1138 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1139 = data
  i1138.m_Index = i1139[0]
  i1138.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1139[1], i1138.m_Metrics)
  i1138.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1139[2], i1138.m_GlyphRect)
  i1138.m_Scale = i1139[3]
  i1138.m_AtlasIndex = i1139[4]
  i1138.m_ClassDefinitionType = i1139[5]
  return i1138
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1140 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1141 = data
  i1140.m_Width = i1141[0]
  i1140.m_Height = i1141[1]
  i1140.m_HorizontalBearingX = i1141[2]
  i1140.m_HorizontalBearingY = i1141[3]
  i1140.m_HorizontalAdvance = i1141[4]
  return i1140
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1142 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1143 = data
  i1142.m_X = i1143[0]
  i1142.m_Y = i1143[1]
  i1142.m_Width = i1143[2]
  i1142.m_Height = i1143[3]
  return i1142
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1146 = root || request.c( 'TMPro.TMP_Character' )
  var i1147 = data
  i1146.m_ElementType = i1147[0]
  i1146.m_Unicode = i1147[1]
  i1146.m_GlyphIndex = i1147[2]
  i1146.m_Scale = i1147[3]
  return i1146
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1152 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1153 = data
  i1152.Name = i1153[0]
  i1152.PointSize = i1153[1]
  i1152.Scale = i1153[2]
  i1152.CharacterCount = i1153[3]
  i1152.LineHeight = i1153[4]
  i1152.Baseline = i1153[5]
  i1152.Ascender = i1153[6]
  i1152.CapHeight = i1153[7]
  i1152.Descender = i1153[8]
  i1152.CenterLine = i1153[9]
  i1152.SuperscriptOffset = i1153[10]
  i1152.SubscriptOffset = i1153[11]
  i1152.SubSize = i1153[12]
  i1152.Underline = i1153[13]
  i1152.UnderlineThickness = i1153[14]
  i1152.strikethrough = i1153[15]
  i1152.strikethroughThickness = i1153[16]
  i1152.TabWidth = i1153[17]
  i1152.Padding = i1153[18]
  i1152.AtlasWidth = i1153[19]
  i1152.AtlasHeight = i1153[20]
  return i1152
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1156 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1157 = data
  i1156.id = i1157[0]
  i1156.x = i1157[1]
  i1156.y = i1157[2]
  i1156.width = i1157[3]
  i1156.height = i1157[4]
  i1156.xOffset = i1157[5]
  i1156.yOffset = i1157[6]
  i1156.xAdvance = i1157[7]
  i1156.scale = i1157[8]
  return i1156
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1158 = root || request.c( 'TMPro.KerningTable' )
  var i1159 = data
  var i1161 = i1159[0]
  var i1160 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.add(request.d('TMPro.KerningPair', i1161[i + 0]));
  }
  i1158.kerningPairs = i1160
  return i1158
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1164 = root || request.c( 'TMPro.KerningPair' )
  var i1165 = data
  i1164.xOffset = i1165[0]
  i1164.m_FirstGlyph = i1165[1]
  i1164.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1165[2], i1164.m_FirstGlyphAdjustments)
  i1164.m_SecondGlyph = i1165[3]
  i1164.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1165[4], i1164.m_SecondGlyphAdjustments)
  i1164.m_IgnoreSpacingAdjustments = !!i1165[5]
  return i1164
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1166 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1167 = data
  var i1169 = i1167[0]
  var i1168 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1169[i + 0]));
  }
  i1166.m_GlyphPairAdjustmentRecords = i1168
  return i1166
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1172 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1173 = data
  i1172.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1173[0], i1172.m_FirstAdjustmentRecord)
  i1172.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1173[1], i1172.m_SecondAdjustmentRecord)
  i1172.m_FeatureLookupFlags = i1173[2]
  return i1172
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1174 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1175 = data
  i1174.m_GlyphIndex = i1175[0]
  i1174.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1175[1], i1174.m_GlyphValueRecord)
  return i1174
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1176 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1177 = data
  i1176.m_XPlacement = i1177[0]
  i1176.m_YPlacement = i1177[1]
  i1176.m_XAdvance = i1177[2]
  i1176.m_YAdvance = i1177[3]
  return i1176
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1180 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1181 = data
  i1180.sourceFontFileName = i1181[0]
  i1180.sourceFontFileGUID = i1181[1]
  i1180.pointSizeSamplingMode = i1181[2]
  i1180.pointSize = i1181[3]
  i1180.padding = i1181[4]
  i1180.packingMode = i1181[5]
  i1180.atlasWidth = i1181[6]
  i1180.atlasHeight = i1181[7]
  i1180.characterSetSelectionMode = i1181[8]
  i1180.characterSequence = i1181[9]
  i1180.referencedFontAssetGUID = i1181[10]
  i1180.referencedTextAssetGUID = i1181[11]
  i1180.fontStyle = i1181[12]
  i1180.fontStyleModifier = i1181[13]
  i1180.renderMode = i1181[14]
  i1180.includeFontFeatures = !!i1181[15]
  return i1180
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1184 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1185 = data
  request.r(i1185[0], i1185[1], 0, i1184, 'regularTypeface')
  request.r(i1185[2], i1185[3], 0, i1184, 'italicTypeface')
  return i1184
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1186 = root || request.c( 'TMPro.TMP_Settings' )
  var i1187 = data
  i1186.m_enableWordWrapping = !!i1187[0]
  i1186.m_enableKerning = !!i1187[1]
  i1186.m_enableExtraPadding = !!i1187[2]
  i1186.m_enableTintAllSprites = !!i1187[3]
  i1186.m_enableParseEscapeCharacters = !!i1187[4]
  i1186.m_EnableRaycastTarget = !!i1187[5]
  i1186.m_GetFontFeaturesAtRuntime = !!i1187[6]
  i1186.m_missingGlyphCharacter = i1187[7]
  i1186.m_warningsDisabled = !!i1187[8]
  request.r(i1187[9], i1187[10], 0, i1186, 'm_defaultFontAsset')
  i1186.m_defaultFontAssetPath = i1187[11]
  i1186.m_defaultFontSize = i1187[12]
  i1186.m_defaultAutoSizeMinRatio = i1187[13]
  i1186.m_defaultAutoSizeMaxRatio = i1187[14]
  i1186.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1187[15], i1187[16] )
  i1186.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1187[17], i1187[18] )
  i1186.m_autoSizeTextContainer = !!i1187[19]
  i1186.m_IsTextObjectScaleStatic = !!i1187[20]
  var i1189 = i1187[21]
  var i1188 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1189.length; i += 2) {
  request.r(i1189[i + 0], i1189[i + 1], 1, i1188, '')
  }
  i1186.m_fallbackFontAssets = i1188
  i1186.m_matchMaterialPreset = !!i1187[22]
  request.r(i1187[23], i1187[24], 0, i1186, 'm_defaultSpriteAsset')
  i1186.m_defaultSpriteAssetPath = i1187[25]
  i1186.m_enableEmojiSupport = !!i1187[26]
  i1186.m_MissingCharacterSpriteUnicode = i1187[27]
  i1186.m_defaultColorGradientPresetsPath = i1187[28]
  request.r(i1187[29], i1187[30], 0, i1186, 'm_defaultStyleSheet')
  i1186.m_StyleSheetsResourcePath = i1187[31]
  request.r(i1187[32], i1187[33], 0, i1186, 'm_leadingCharacters')
  request.r(i1187[34], i1187[35], 0, i1186, 'm_followingCharacters')
  i1186.m_UseModernHangulLineBreakingRules = !!i1187[36]
  return i1186
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1190 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1191 = data
  request.r(i1191[0], i1191[1], 0, i1190, 'spriteSheet')
  var i1193 = i1191[2]
  var i1192 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.add(request.d('TMPro.TMP_Sprite', i1193[i + 0]));
  }
  i1190.spriteInfoList = i1192
  var i1195 = i1191[3]
  var i1194 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1195.length; i += 2) {
  request.r(i1195[i + 0], i1195[i + 1], 1, i1194, '')
  }
  i1190.fallbackSpriteAssets = i1194
  i1190.hashCode = i1191[4]
  request.r(i1191[5], i1191[6], 0, i1190, 'material')
  i1190.materialHashCode = i1191[7]
  i1190.m_Version = i1191[8]
  i1190.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1191[9], i1190.m_FaceInfo)
  var i1197 = i1191[10]
  var i1196 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1197.length; i += 1) {
    i1196.add(request.d('TMPro.TMP_SpriteCharacter', i1197[i + 0]));
  }
  i1190.m_SpriteCharacterTable = i1196
  var i1199 = i1191[11]
  var i1198 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1199.length; i += 1) {
    i1198.add(request.d('TMPro.TMP_SpriteGlyph', i1199[i + 0]));
  }
  i1190.m_SpriteGlyphTable = i1198
  return i1190
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1202 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1203 = data
  i1202.name = i1203[0]
  i1202.hashCode = i1203[1]
  i1202.unicode = i1203[2]
  i1202.pivot = new pc.Vec2( i1203[3], i1203[4] )
  request.r(i1203[5], i1203[6], 0, i1202, 'sprite')
  i1202.id = i1203[7]
  i1202.x = i1203[8]
  i1202.y = i1203[9]
  i1202.width = i1203[10]
  i1202.height = i1203[11]
  i1202.xOffset = i1203[12]
  i1202.yOffset = i1203[13]
  i1202.xAdvance = i1203[14]
  i1202.scale = i1203[15]
  return i1202
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1208 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1209 = data
  i1208.m_Name = i1209[0]
  i1208.m_HashCode = i1209[1]
  i1208.m_ElementType = i1209[2]
  i1208.m_Unicode = i1209[3]
  i1208.m_GlyphIndex = i1209[4]
  i1208.m_Scale = i1209[5]
  return i1208
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1212 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1213 = data
  request.r(i1213[0], i1213[1], 0, i1212, 'sprite')
  i1212.m_Index = i1213[2]
  i1212.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1213[3], i1212.m_Metrics)
  i1212.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1213[4], i1212.m_GlyphRect)
  i1212.m_Scale = i1213[5]
  i1212.m_AtlasIndex = i1213[6]
  i1212.m_ClassDefinitionType = i1213[7]
  return i1212
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1214 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1215 = data
  var i1217 = i1215[0]
  var i1216 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.add(request.d('TMPro.TMP_Style', i1217[i + 0]));
  }
  i1214.m_StyleList = i1216
  return i1214
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1220 = root || request.c( 'TMPro.TMP_Style' )
  var i1221 = data
  i1220.m_Name = i1221[0]
  i1220.m_HashCode = i1221[1]
  i1220.m_OpeningDefinition = i1221[2]
  i1220.m_ClosingDefinition = i1221[3]
  i1220.m_OpeningTagArray = i1221[4]
  i1220.m_ClosingTagArray = i1221[5]
  i1220.m_OpeningTagUnicodeArray = i1221[6]
  i1220.m_ClosingTagUnicodeArray = i1221[7]
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1223 = data
  var i1225 = i1223[0]
  var i1224 = []
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1225[i + 0]) );
  }
  i1222.files = i1224
  i1222.componentToPrefabIds = i1223[1]
  return i1222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1229 = data
  i1228.path = i1229[0]
  request.r(i1229[1], i1229[2], 0, i1228, 'unityObject')
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1231 = data
  var i1233 = i1231[0]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1233[i + 0]) );
  }
  i1230.scriptsExecutionOrder = i1232
  var i1235 = i1231[1]
  var i1234 = []
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1235[i + 0]) );
  }
  i1230.sortingLayers = i1234
  var i1237 = i1231[2]
  var i1236 = []
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1237[i + 0]) );
  }
  i1230.cullingLayers = i1236
  i1230.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1231[3], i1230.timeSettings)
  i1230.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1231[4], i1230.physicsSettings)
  i1230.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1231[5], i1230.physics2DSettings)
  i1230.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1231[6], i1230.qualitySettings)
  i1230.enableRealtimeShadows = !!i1231[7]
  i1230.enableAutoInstancing = !!i1231[8]
  i1230.enableStaticBatching = !!i1231[9]
  i1230.enableDynamicBatching = !!i1231[10]
  i1230.lightmapEncodingQuality = i1231[11]
  i1230.desiredColorSpace = i1231[12]
  var i1239 = i1231[13]
  var i1238 = []
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.push( i1239[i + 0] );
  }
  i1230.allTags = i1238
  return i1230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1243 = data
  i1242.name = i1243[0]
  i1242.value = i1243[1]
  return i1242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1247 = data
  i1246.id = i1247[0]
  i1246.name = i1247[1]
  i1246.value = i1247[2]
  return i1246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1251 = data
  i1250.id = i1251[0]
  i1250.name = i1251[1]
  return i1250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1253 = data
  i1252.fixedDeltaTime = i1253[0]
  i1252.maximumDeltaTime = i1253[1]
  i1252.timeScale = i1253[2]
  i1252.maximumParticleTimestep = i1253[3]
  return i1252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1255 = data
  i1254.gravity = new pc.Vec3( i1255[0], i1255[1], i1255[2] )
  i1254.defaultSolverIterations = i1255[3]
  i1254.bounceThreshold = i1255[4]
  i1254.autoSyncTransforms = !!i1255[5]
  i1254.autoSimulation = !!i1255[6]
  var i1257 = i1255[7]
  var i1256 = []
  for(var i = 0; i < i1257.length; i += 1) {
    i1256.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1257[i + 0]) );
  }
  i1254.collisionMatrix = i1256
  return i1254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1261 = data
  i1260.enabled = !!i1261[0]
  i1260.layerId = i1261[1]
  i1260.otherLayerId = i1261[2]
  return i1260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1263 = data
  request.r(i1263[0], i1263[1], 0, i1262, 'material')
  i1262.gravity = new pc.Vec2( i1263[2], i1263[3] )
  i1262.positionIterations = i1263[4]
  i1262.velocityIterations = i1263[5]
  i1262.velocityThreshold = i1263[6]
  i1262.maxLinearCorrection = i1263[7]
  i1262.maxAngularCorrection = i1263[8]
  i1262.maxTranslationSpeed = i1263[9]
  i1262.maxRotationSpeed = i1263[10]
  i1262.baumgarteScale = i1263[11]
  i1262.baumgarteTOIScale = i1263[12]
  i1262.timeToSleep = i1263[13]
  i1262.linearSleepTolerance = i1263[14]
  i1262.angularSleepTolerance = i1263[15]
  i1262.defaultContactOffset = i1263[16]
  i1262.autoSimulation = !!i1263[17]
  i1262.queriesHitTriggers = !!i1263[18]
  i1262.queriesStartInColliders = !!i1263[19]
  i1262.callbacksOnDisable = !!i1263[20]
  i1262.reuseCollisionCallbacks = !!i1263[21]
  i1262.autoSyncTransforms = !!i1263[22]
  var i1265 = i1263[23]
  var i1264 = []
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1265[i + 0]) );
  }
  i1262.collisionMatrix = i1264
  return i1262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1269 = data
  i1268.enabled = !!i1269[0]
  i1268.layerId = i1269[1]
  i1268.otherLayerId = i1269[2]
  return i1268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1271 = data
  var i1273 = i1271[0]
  var i1272 = []
  for(var i = 0; i < i1273.length; i += 1) {
    i1272.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1273[i + 0]) );
  }
  i1270.qualityLevels = i1272
  var i1275 = i1271[1]
  var i1274 = []
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.push( i1275[i + 0] );
  }
  i1270.names = i1274
  i1270.shadows = i1271[2]
  i1270.anisotropicFiltering = i1271[3]
  i1270.antiAliasing = i1271[4]
  i1270.lodBias = i1271[5]
  i1270.shadowCascades = i1271[6]
  i1270.shadowDistance = i1271[7]
  i1270.shadowmaskMode = i1271[8]
  i1270.shadowProjection = i1271[9]
  i1270.shadowResolution = i1271[10]
  i1270.softParticles = !!i1271[11]
  i1270.softVegetation = !!i1271[12]
  i1270.activeColorSpace = i1271[13]
  i1270.desiredColorSpace = i1271[14]
  i1270.masterTextureLimit = i1271[15]
  i1270.maxQueuedFrames = i1271[16]
  i1270.particleRaycastBudget = i1271[17]
  i1270.pixelLightCount = i1271[18]
  i1270.realtimeReflectionProbes = !!i1271[19]
  i1270.shadowCascade2Split = i1271[20]
  i1270.shadowCascade4Split = new pc.Vec3( i1271[21], i1271[22], i1271[23] )
  i1270.streamingMipmapsActive = !!i1271[24]
  i1270.vSyncCount = i1271[25]
  i1270.asyncUploadBufferSize = i1271[26]
  i1270.asyncUploadTimeSlice = i1271[27]
  i1270.billboardsFaceCameraPosition = !!i1271[28]
  i1270.shadowNearPlaneOffset = i1271[29]
  i1270.streamingMipmapsMemoryBudget = i1271[30]
  i1270.maximumLODLevel = i1271[31]
  i1270.streamingMipmapsAddAllCameras = !!i1271[32]
  i1270.streamingMipmapsMaxLevelReduction = i1271[33]
  i1270.streamingMipmapsRenderersPerFrame = i1271[34]
  i1270.resolutionScalingFixedDPIFactor = i1271[35]
  i1270.streamingMipmapsMaxFileIORequests = i1271[36]
  i1270.currentQualityLevel = i1271[37]
  return i1270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1281 = data
  i1280.weight = i1281[0]
  i1280.vertices = i1281[1]
  i1280.normals = i1281[2]
  i1280.tangents = i1281[3]
  return i1280
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1282 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1283 = data
  i1282.xPlacement = i1283[0]
  i1282.yPlacement = i1283[1]
  i1282.xAdvance = i1283[2]
  i1282.yAdvance = i1283[3]
  return i1282
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.RenderTexture":{"name":0,"width":1,"height":2,"anisoLevel":3,"filterMode":4,"hdr":5,"colorFormat":6,"depthStencilFormat":7,"renderTextureFormat":8,"depth":9,"wrapU":10,"wrapV":11},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"enabled":19},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint":{"useMotor":0,"useLimits":1,"useSpring":2,"limits":3,"motor":4,"spring":5,"connectedBody":6,"axis":8,"anchor":11,"connectedAnchor":14,"autoConfigureConnectedAnchor":17,"massScale":18,"connectedMassScale":19,"enableCollision":20,"breakForce":21,"breakTorque":22},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"29":[30],"66":[16],"67":[19],"68":[19],"27":[19],"69":[19],"70":[19],"71":[19],"72":[19],"73":[74],"75":[74],"76":[74],"77":[74],"78":[74],"79":[74],"80":[74],"81":[74],"82":[74],"83":[74],"84":[74],"85":[74],"86":[74],"87":[16],"88":[5],"89":[90],"91":[90],"41":[7],"92":[93],"94":[7],"95":[7],"43":[41],"45":[44,7],"96":[7],"42":[41],"97":[7],"98":[7],"99":[7],"100":[7],"101":[7],"102":[7],"103":[7],"104":[7],"105":[7],"47":[44,7],"106":[7],"107":[7],"108":[7],"109":[7],"110":[44,7],"111":[7],"112":[50],"113":[50],"51":[50],"114":[50],"115":[16],"116":[16],"117":[93],"118":[7],"9":[5,7],"40":[7,44],"119":[7],"120":[44,7],"121":[5],"122":[44,7],"123":[7],"124":[93]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.RectTransform","UnityEngine.EventSystems.UIBehaviour","TMPro.TextMeshPro","TMPro.TMP_FontAsset","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.BoxCollider","UnityEngine.PhysicMaterial","UnityEngine.Light","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.SphereCollider","UnityEngine.Rigidbody","UnityEngine.TrailRenderer","UnityEngine.MonoBehaviour","BallHandler","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.HingeJoint","UnityEngine.CapsuleCollider","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","SelectBall","BallScriptableObject","SelectBallUI","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.RenderTexture","PlayerController","UnityEngine.GameObject","GameManager","TMPro.TextMeshProUGUI","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Button","UnityEngine.UI.RawImage","UnityEngine.UI.Outline","UnityEngine.UI.Shadow","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","SoundManager","UnityEngine.Cubemap","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.34f1";

Deserializers.productName = "Basketball";

Deserializers.lunaInitializationTime = "08/15/2025 07:35:26";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "32239";

Deserializers.projectId = "a08e2665e00ec554db5fc258f8cd7a11";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1592";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4410";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, reflection";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.Basketball";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "652edd45-8698-4789-a5d8-c9031df622ee";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AdaptivePerformance","AdaptivePerformanceInitializer","Initialize"]],[["UnityEngine","AdaptivePerformance","AdaptivePerformanceGeneralSettings","AttemptInitializeAdaptivePerformanceOnLoad"]],[["UnityEngine","AdaptivePerformance","AdaptivePerformanceGeneralSettings","AttemptStartAdaptivePerformanceOnBeforeSplashScreen"]],[["UnityEditor","AdaptivePerformance","Simulator","Editor","SimulatorAdaptivePerformanceSubsystem","RegisterDescriptor"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

