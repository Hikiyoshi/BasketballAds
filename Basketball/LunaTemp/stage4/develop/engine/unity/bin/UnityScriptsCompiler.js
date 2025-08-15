if ( TRACE ) { TRACE( JSON.parse( '["BallHandler#init","BallHandler#Start","BallHandler#FixedUpdate","BallHandler#OnTriggerEnter","BallHandler#OnCollisionEnter","GameManager#init","GameManager#Awake","GameManager#Update","GameManager#GameOver","GameManager#SetUpScore","GameManager#StartGame","GameManager#QuitGame","GameManager#PlusPoint","GameManager#showPerfectText","GameManager#showSelectBall","GameManager#WaitBeforeSet","GameManager#HideSelectBall","GameManager#PlaySfxBallCollide","PlayerController#init","PlayerController#Start","PlayerController#Update","PlayerController#Swiping","PlayerController#FixedUpdate","PlayerController#BeginTouch","PlayerController#HoldingBall","PlayerController#EndTouch","PlayerController#ConvertValue","PlayerController#ConvertValue$1","PlayerController#SetHoldBall","PlayerController#SetCanSelect","SelectBall#init","SelectBall#Start","SelectBall#Update","SelectBall#ScrollBall","SelectBall#ChangeSkinBall","SelectBall#GetBallAmount","SelectBallUI#Start","SelectBallUI#Update","SelectBallUI#UpdateSetText","SelectBallUI#RandomBall","SelectBallUI#ChangeBall","SelectBallUI#ChangeNextBall","SoundManager#Start","SoundManager#GameManager_OnBallCOllide","SoundManager#GameManager_OnPerfect","SoundManager#GameManager_OnGameStart","SoundManager#GameManager_OnGameComplete"]' ) ); }
/**
 * @version 1.0.9358.30732
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*BallHandler start.*/
    Bridge.define("BallHandler", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            rb: null,
            checkedTopTrigger: false,
            isPerfect: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BallHandler#init", this ); }

                this.checkedTopTrigger = false;
                this.isPerfect = true;
            }
        },
        methods: {
            /*BallHandler.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "BallHandler#Start", this ); }

                this.rb = this.GetComponent(UnityEngine.Rigidbody);
            },
            /*BallHandler.Start end.*/

            /*BallHandler.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "BallHandler#FixedUpdate", this ); }

                this.rb.AddForce$1(pc.Vec3.DOWN.clone().clone().scale( 9.8 ), UnityEngine.ForceMode.Force);
            },
            /*BallHandler.FixedUpdate end.*/

            /*BallHandler.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "BallHandler#OnTriggerEnter", this ); }

                if (Bridge.referenceEquals(other.name, "dunkTriggerTop")) {
                    this.checkedTopTrigger = true;
                }

                if (this.checkedTopTrigger && Bridge.referenceEquals(other.name, "dunkTriggerBottom")) {
                    this.checkedTopTrigger = false;

                    var dunkType = GameManager.dunkType.normal;

                    if (this.isPerfect) {
                        dunkType = GameManager.dunkType.perfect;
                    }

                    GameManager.Instance.PlusPoint(dunkType);

                    this.isPerfect = true;
                }
            },
            /*BallHandler.OnTriggerEnter end.*/

            /*BallHandler.OnCollisionEnter start.*/
            OnCollisionEnter: function (collision) {
if ( TRACE ) { TRACE( "BallHandler#OnCollisionEnter", this ); }

                if (Bridge.referenceEquals(collision.transform.tag, "checkPerfectTag")) {
                    GameManager.Instance.PlaySfxBallCollide();

                    this.isPerfect = false;
                }
            },
            /*BallHandler.OnCollisionEnter end.*/


        }
    });
    /*BallHandler end.*/

    /*BallScriptableObject start.*/
    Bridge.define("BallScriptableObject", {
        inherits: [UnityEngine.ScriptableObject],
        fields: {
            ballIndex: 0,
            name$1: null,
            ballTexture: null
        }
    });
    /*BallScriptableObject end.*/

    /*GameManager start.*/
    Bridge.define("GameManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            scoreText: null,
            timeText: null,
            highestText: null,
            scoreGameOverText: null,
            highestGameOverText: null,
            selectBallGameObject: null,
            perfectTextGameObject: null,
            gameoverUIGameObject: null,
            buttonPanelGameObject: null,
            newHightScoreImageGameObject: null,
            player: null,
            perfectParticle: null,
            ChainLightsFull: null,
            playTime: 0,
            normalDunkScore: 0,
            perfectDunkScore: 0,
            score: 0,
            highestScore: 0,
            _playTime: 0,
            canCountTime: false
        },
        events: {
            OnBallCollide: null,
            OnPerfect: null,
            OnGameStart: null,
            OnGameComplete: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GameManager#init", this ); }

                this.normalDunkScore = 1;
                this.perfectDunkScore = 2;
                this.score = 0;
                this.highestScore = 0;
                this.canCountTime = true;
            }
        },
        methods: {
            /*GameManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "GameManager#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(GameManager.Instance, null)) {
                    UnityEngine.Debug.LogError$2("Another GameManager Exist, Destroy This GameManager");
                    UnityEngine.Object.Destroy(this);
                    return;
                }

                this._playTime = this.playTime;
                this.scoreText.text = System.Single.format(this.score);

                GameManager.Instance = this;

                this.ChainLightsFull.Play();
            },
            /*GameManager.Awake end.*/

            /*GameManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "GameManager#Update", this ); }

                if (this._playTime === -1.0) {
                    this.canCountTime = false;
                }

                if (!this.canCountTime) {
                    return;
                }

                this._playTime -= UnityEngine.Time.deltaTime;
                this.timeText.text = Bridge.toString(Bridge.Int.clip32(this._playTime));

                if (this._playTime <= 0) {
                    this.GameOver();
                }
            },
            /*GameManager.Update end.*/

            /*GameManager.GameOver start.*/
            GameOver: function () {
if ( TRACE ) { TRACE( "GameManager#GameOver", this ); }

                UnityEngine.Debug.Log$1("Game Over");

                this.canCountTime = false;

                // Time.timeScale = 0;

                !Bridge.staticEquals(this.OnGameComplete, null) ? this.OnGameComplete() : null;

                this.gameoverUIGameObject.SetActive(true);

                if (this.highestScore < this.score) {
                    this.highestScore = this.score;
                    this.newHightScoreImageGameObject.SetActive(true);
                } else {
                    this.newHightScoreImageGameObject.SetActive(false);
                }

                this.scoreGameOverText.text = "Score: " + System.Single.format(this.score);
                this.highestGameOverText.text = "Highest: " + System.Single.format(this.highestScore);
            },
            /*GameManager.GameOver end.*/

            /*GameManager.SetUpScore start.*/
            SetUpScore: function () {
if ( TRACE ) { TRACE( "GameManager#SetUpScore", this ); }

                this._playTime = this.playTime;

                this.scoreText.text = System.Single.format(this.score);
                this.timeText.text = Bridge.toString(Bridge.Int.clip32(this._playTime));
                this.highestText.text = System.Single.format(this.highestScore);
            },
            /*GameManager.SetUpScore end.*/

            /*GameManager.StartGame start.*/
            StartGame: function () {
if ( TRACE ) { TRACE( "GameManager#StartGame", this ); }

                this.canCountTime = true;

                this.score = 0;

                this.SetUpScore();

                this.gameoverUIGameObject.SetActive(false);

                !Bridge.staticEquals(this.OnGameStart, null) ? this.OnGameStart() : null;
            },
            /*GameManager.StartGame end.*/

            /*GameManager.QuitGame start.*/
            QuitGame: function () {
if ( TRACE ) { TRACE( "GameManager#QuitGame", this ); }

                UnityEngine.Application.Quit();
            },
            /*GameManager.QuitGame end.*/

            /*GameManager.PlusPoint start.*/
            PlusPoint: function (dunkType) {
if ( TRACE ) { TRACE( "GameManager#PlusPoint", this ); }

                var plusScore = this.normalDunkScore;

                if (dunkType === GameManager.dunkType.perfect) {
                    this.perfectParticle.Play();
                    !Bridge.staticEquals(this.OnPerfect, null) ? this.OnPerfect() : null;

                    this.StartCoroutine$1(this.showPerfectText());

                    plusScore = this.perfectDunkScore;
                }

                this.score += plusScore;

                this.scoreText.text = System.Single.format(this.score);

                UnityEngine.Debug.Log$1("Score: " + System.Single.format(this.score));
            },
            /*GameManager.PlusPoint end.*/

            /*GameManager.showPerfectText start.*/
            showPerfectText: function () {
if ( TRACE ) { TRACE( "GameManager#showPerfectText", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.perfectTextGameObject.SetActive(true);

                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.5);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.perfectTextGameObject.SetActive(false);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*GameManager.showPerfectText end.*/

            /*GameManager.showSelectBall start.*/
            showSelectBall: function () {
if ( TRACE ) { TRACE( "GameManager#showSelectBall", this ); }

                this.canCountTime = false;

                this.player.SetHoldBall(false);
                this.player.SetCanSelect(true);

                this.StartCoroutine$1(this.WaitBeforeSet());

                this.ChainLightsFull.Pause();
            },
            /*GameManager.showSelectBall end.*/

            /*GameManager.WaitBeforeSet start.*/
            WaitBeforeSet: function () {
if ( TRACE ) { TRACE( "GameManager#WaitBeforeSet", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.buttonPanelGameObject.GetComponent(UnityEngine.Animator).SetTrigger$1("play");

                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.4);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.selectBallGameObject.SetActive(true);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*GameManager.WaitBeforeSet end.*/

            /*GameManager.HideSelectBall start.*/
            HideSelectBall: function () {
if ( TRACE ) { TRACE( "GameManager#HideSelectBall", this ); }

                this.canCountTime = true;

                this.player.SetHoldBall(true);
                this.player.SetCanSelect(false);

                this.buttonPanelGameObject.GetComponent(UnityEngine.Animator).SetTrigger$1("play");

                this.selectBallGameObject.SetActive(false);

                this.ChainLightsFull.Play();
            },
            /*GameManager.HideSelectBall end.*/

            /*GameManager.PlaySfxBallCollide start.*/
            PlaySfxBallCollide: function () {
if ( TRACE ) { TRACE( "GameManager#PlaySfxBallCollide", this ); }

                !Bridge.staticEquals(this.OnBallCollide, null) ? this.OnBallCollide() : null;
            },
            /*GameManager.PlaySfxBallCollide end.*/


        }
    });
    /*GameManager end.*/

    /*GameManager+dunkType start.*/
    Bridge.define("GameManager.dunkType", {
        $kind: 1006,
        statics: {
            fields: {
                normal: 0,
                perfect: 1
            }
        }
    });
    /*GameManager+dunkType end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*PlayerController start.*/
    Bridge.define("PlayerController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            canHoldBall: false,
            touchTrailGameObject: null,
            ballselectionTransform: null,
            ballMask: null,
            selectBall: null,
            forceThrown: 0,
            forceTorque: 0,
            maxDistanceVerticle: 0,
            maxDistanceHorizontal: 0,
            touch: null,
            isHolding: false,
            canSelectBall: false,
            currentBallTransform: null,
            startTouchPos: null,
            distZ: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PlayerController#init", this ); }

                this.ballMask = new UnityEngine.LayerMask();
                this.touch = new UnityEngine.Touch();
                this.startTouchPos = new UnityEngine.Vector3();
            }
        },
        methods: {
            /*PlayerController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "PlayerController#Start", this ); }

                this.touchTrailGameObject.SetActive(false);
                this.canHoldBall = true;
            },
            /*PlayerController.Start end.*/

            /*PlayerController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "PlayerController#Update", this ); }

                var $t;
                if (UnityEngine.Input.touchCount === 0) {
                    return;
                }

                this.touch = ($t = UnityEngine.Input.touches)[0].$clone();

                var touchPos = UnityEngine.Vector3.FromVector2(this.touch.position.$clone());

                switch (this.touch.phase) {
                    case UnityEngine.TouchPhase.Began: 
                        this.BeginTouch(touchPos);
                        break;
                    case UnityEngine.TouchPhase.Stationary: 
                        this.startTouchPos = UnityEngine.Vector3.FromVector2(this.touch.position.$clone());
                        break;
                    case UnityEngine.TouchPhase.Moved: 
                        // if (isHolding)
                        // {
                        //     HoldingBall(touchPos);
                        // }
                        this.Swiping(touchPos);
                        break;
                    case UnityEngine.TouchPhase.Canceled: 
                    case UnityEngine.TouchPhase.Ended: 
                        this.EndTouch();
                        break;
                }
            },
            /*PlayerController.Update end.*/

            /*PlayerController.Swiping start.*/
            Swiping: function (touchPos) {
if ( TRACE ) { TRACE( "PlayerController#Swiping", this ); }

                //Handle Touch Trail
                this.touchTrailGameObject.transform.position = UnityEngine.Camera.main.ScreenToWorldPoint(new pc.Vec3( touchPos.x, touchPos.y, 22.0 ));
                this.touchTrailGameObject.SetActive(true);

                //Handle Ball Selection
                if (!this.canSelectBall) {
                    return;
                }

                var distanceY = this.startTouchPos.x - touchPos.x;

                var currentBallIndex = this.selectBall.currentBallIndex;

                if (distanceY > 40.0) {
                    this.selectBall.ScrollBall(((currentBallIndex = (currentBallIndex - 1) | 0)));
                } else if (distanceY < -40.0) {
                    this.selectBall.ScrollBall(((currentBallIndex = (currentBallIndex + 1) | 0)));
                }

                this.startTouchPos = UnityEngine.Vector3.FromVector2(this.touch.position.$clone());
            },
            /*PlayerController.Swiping end.*/

            /*PlayerController.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "PlayerController#FixedUpdate", this ); }

                if (this.isHolding) {
                    this.HoldingBall(UnityEngine.Vector3.FromVector2(this.touch.position));
                }
            },
            /*PlayerController.FixedUpdate end.*/

            /*PlayerController.BeginTouch start.*/
            BeginTouch: function (touchPos) {
if ( TRACE ) { TRACE( "PlayerController#BeginTouch", this ); }

                this.startTouchPos = UnityEngine.Vector3.FromVector2(this.touch.position.$clone());

                if (!this.canHoldBall) {
                    return;
                }

                //Handle Check Hold Ball
                var ray = UnityEngine.Camera.main.ScreenPointToRay(touchPos);

                var hit = { v : new UnityEngine.RaycastHit() };
                if (UnityEngine.Physics.Raycast$1(ray, hit, window.Infinity, UnityEngine.LayerMask.op_Implicit(this.ballMask.$clone()))) {
                    UnityEngine.Debug.DrawLine(ray.origin, hit.v.point);
                    if (Bridge.referenceEquals(hit.v.collider.tag, "ballTag")) {
                        this.isHolding = true;

                        this.currentBallTransform = hit.v.transform;

                        this.distZ = this.currentBallTransform.position.z - UnityEngine.Camera.main.transform.position.z;
                    }
                }
            },
            /*PlayerController.BeginTouch end.*/

            /*PlayerController.HoldingBall start.*/
            HoldingBall: function (touchPos) {
if ( TRACE ) { TRACE( "PlayerController#HoldingBall", this ); }

                this.currentBallTransform.gameObject.GetComponent(UnityEngine.Rigidbody).isKinematic = true;
                this.currentBallTransform.GetComponent(UnityEngine.Collider).enabled = false;

                UnityEngine.Debug.Log(Bridge.box(this.distZ, System.Single, System.Single.format, System.Single.getHashCode));

                var touchPosBaseZ = new pc.Vec3( touchPos.x, touchPos.y, this.distZ );
                var newPos = UnityEngine.Camera.main.ScreenToWorldPoint(touchPosBaseZ);

                this.currentBallTransform.position = newPos.$clone();
            },
            /*PlayerController.HoldingBall end.*/

            /*PlayerController.EndTouch start.*/
            EndTouch: function () {
if ( TRACE ) { TRACE( "PlayerController#EndTouch", this ); }

                //End Touch Trail
                this.touchTrailGameObject.SetActive(false);

                //Throw the ball if holding 
                if (this.isHolding) {
                    this.currentBallTransform.GetComponent(UnityEngine.Collider).enabled = true;
                    var rb = this.currentBallTransform.GetComponent(UnityEngine.Rigidbody);
                    rb.isKinematic = false;

                    //Calculate force to thrown
                    var distanceX = this.startTouchPos.x - this.touch.position.x;
                    var distanceY = this.startTouchPos.y - this.touch.position.y;

                    UnityEngine.Debug.Log$1("Verticle: " + System.Single.format(distanceY) + "Horizontal: " + System.Single.format(distanceX));

                    distanceX = Math.max(-this.maxDistanceHorizontal, Math.min(distanceX, this.maxDistanceHorizontal));
                    distanceY = Math.max(-this.maxDistanceVerticle, Math.min(distanceY, this.maxDistanceVerticle));

                    var distVerticle = 0.1;

                    if (distanceY < 0) {
                        distVerticle = this.ConvertValue$1(distanceY, 0.0, this.maxDistanceVerticle, 0.0, 1.0);
                    }

                    var distHorizontal = this.ConvertValue$1(distanceX, 0.0, this.maxDistanceHorizontal, 0.0, 0.15);

                    var direction = new pc.Vec3( -distHorizontal, -distVerticle, 0.8 );
                    UnityEngine.Debug.Log(direction.$clone());
                    rb.AddForce$1(direction.$clone().clone().scale( this.forceThrown ), UnityEngine.ForceMode.Impulse);
                    rb.AddTorque$1(pc.Vec3.RIGHT.clone().clone().scale( this.forceTorque ), UnityEngine.ForceMode.Impulse);

                    this.isHolding = false;
                }
            },
            /*PlayerController.EndTouch end.*/

            /*PlayerController.ConvertValue start.*/
            ConvertValue: function (value, min, max) {
if ( TRACE ) { TRACE( "PlayerController#ConvertValue", this ); }

                return (value - min) / (max - min);
            },
            /*PlayerController.ConvertValue end.*/

            /*PlayerController.ConvertValue$1 start.*/
            ConvertValue$1: function (value, oldmin, oldmax, newmin, newmax) {
if ( TRACE ) { TRACE( "PlayerController#ConvertValue$1", this ); }

                return newmin + ((value - oldmin) * (newmax - newmin) / (oldmax - oldmin));
            },
            /*PlayerController.ConvertValue$1 end.*/

            /*PlayerController.SetHoldBall start.*/
            SetHoldBall: function (canHold) {
if ( TRACE ) { TRACE( "PlayerController#SetHoldBall", this ); }

                this.canHoldBall = canHold;
            },
            /*PlayerController.SetHoldBall end.*/

            /*PlayerController.SetCanSelect start.*/
            SetCanSelect: function (canSelect) {
if ( TRACE ) { TRACE( "PlayerController#SetCanSelect", this ); }

                this.canSelectBall = canSelect;
            },
            /*PlayerController.SetCanSelect end.*/


        },
        overloads: {
            "ConvertValue(float, float, float, float, float)": "ConvertValue$1"
        }
    });
    /*PlayerController end.*/

    /*SelectBall start.*/
    Bridge.define("SelectBall", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            ballMaterial: null,
            ballScriptableObjects: null,
            ballTransform: null,
            currentBall: null,
            selectBallUI: null,
            ballselectionTransform: null,
            ballAmount: 0,
            scrollSpeed: 0,
            currentBallIndex: 0,
            isRotating: false,
            anglePerBall: 0,
            targetRotation: null,
            currentBallGameObject: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SelectBall#init", this ); }

                this.targetRotation = new UnityEngine.Vector3();
                this.ballScriptableObjects = new (System.Collections.Generic.List$1(BallScriptableObject)).ctor();
                this.ballTransform = new (System.Collections.Generic.List$1(UnityEngine.Transform)).ctor();
                this.ballAmount = 8;
                this.scrollSpeed = 5.0;
            }
        },
        methods: {
            /*SelectBall.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "SelectBall#Start", this ); }

                this.anglePerBall = (Bridge.Int.div(360, this.ballAmount)) | 0;

                this.targetRotation = new pc.Vec3( 0.0, this.ballselectionTransform.localRotation.y + -(this.currentBallIndex * this.anglePerBall), 0.0 );

                this.currentBallGameObject = this.ballTransform.getItem(this.currentBallIndex);
                var randomAngle = UnityEngine.Random.Range$1(0.0, 360.0);
                this.currentBallGameObject.Rotate(randomAngle, randomAngle, randomAngle);
            },
            /*SelectBall.Start end.*/

            /*SelectBall.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "SelectBall#Update", this ); }

                if (this.isRotating) {
                    var rotation = new pc.Quat().setFromEulerAngles_Unity( this.targetRotation.x, this.targetRotation.y, this.targetRotation.z );
                    this.ballselectionTransform.rotation = new pc.Quat().slerpUnclamped( this.ballselectionTransform.rotation, rotation, pc.math.clamp( this.scrollSpeed * UnityEngine.Time.deltaTime, 0, 1 ) );
                }

                if (pc.Quat.angle( this.ballselectionTransform.rotation.$clone(), new pc.Quat().setFromEulerAngles_Unity( this.targetRotation.x, this.targetRotation.y, this.targetRotation.z ) ) < 0.1) {
                    this.isRotating = false;
                }

                if (UnityEngine.Component.op_Equality(this.currentBallGameObject, null)) {
                    return;
                }

                this.currentBallGameObject.Rotate$2(new pc.Vec3( 1, 1, 1 ).clone().scale( 20.0 ).clone().scale( UnityEngine.Time.deltaTime ));
            },
            /*SelectBall.Update end.*/

            /*SelectBall.ScrollBall start.*/
            ScrollBall: function (index) {
if ( TRACE ) { TRACE( "SelectBall#ScrollBall", this ); }

                if (index >= this.ballAmount) {
                    index = 0;
                }

                if (index < 0) {
                    index = (this.ballAmount - 1) | 0;
                }

                this.currentBallIndex = index;

                var angle = ((-this.currentBallIndex) | 0) * this.anglePerBall;

                this.targetRotation = new pc.Vec3( 0.0, this.ballselectionTransform.localRotation.y + angle, 0.0 );

                this.currentBallGameObject = this.ballTransform.getItem(this.currentBallIndex);

                var randomAngle = UnityEngine.Random.Range$1(0.0, 360.0);
                this.currentBallGameObject.Rotate(randomAngle, randomAngle, randomAngle);

                this.isRotating = true;

                this.selectBallUI.UpdateSetText();
            },
            /*SelectBall.ScrollBall end.*/

            /*SelectBall.ChangeSkinBall start.*/
            ChangeSkinBall: function () {
if ( TRACE ) { TRACE( "SelectBall#ChangeSkinBall", this ); }

                var $t;
                $t = Bridge.getEnumerator(this.ballScriptableObjects);
                try {
                    while ($t.moveNext()) {
                        var ball = $t.Current;
                        if (this.currentBallIndex === ball.ballIndex) {
                            this.currentBall = ball;
                            break;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                this.ballMaterial.mainTexture = this.currentBall.ballTexture;
            },
            /*SelectBall.ChangeSkinBall end.*/

            /*SelectBall.GetBallAmount start.*/
            GetBallAmount: function () {
if ( TRACE ) { TRACE( "SelectBall#GetBallAmount", this ); }

                return this.ballAmount;
            },
            /*SelectBall.GetBallAmount end.*/


        }
    });
    /*SelectBall end.*/

    /*SelectBallUI start.*/
    Bridge.define("SelectBallUI", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            selectBall: null,
            ArrowBtn: null,
            okBtn: null,
            randomBtn: null,
            setText: null,
            selectImageGameObject: null
        },
        methods: {
            /*SelectBallUI.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "SelectBallUI#Start", this ); }

                this.ArrowBtn.onClick.AddListener(Bridge.fn.cacheBind(this, this.ChangeNextBall));
                this.okBtn.onClick.AddListener(Bridge.fn.cacheBind(this, this.ChangeBall));
                this.randomBtn.onClick.AddListener(Bridge.fn.cacheBind(this, this.RandomBall));

                this.UpdateSetText();
            },
            /*SelectBallUI.Start end.*/

            /*SelectBallUI.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "SelectBallUI#Update", this ); }

                if (this.selectBall.isRotating) {
                    this.selectImageGameObject.SetActive(false);
                } else {
                    this.selectImageGameObject.SetActive(true);
                }
            },
            /*SelectBallUI.Update end.*/

            /*SelectBallUI.UpdateSetText start.*/
            UpdateSetText: function () {
if ( TRACE ) { TRACE( "SelectBallUI#UpdateSetText", this ); }

                var currentBallIndex = this.selectBall.currentBallIndex;
                var ballAmount = this.selectBall.GetBallAmount();
                this.setText.text = System.String.format("Set {0} of {1}", Bridge.box(((currentBallIndex + 1) | 0), System.Int32), Bridge.box(ballAmount, System.Int32));
            },
            /*SelectBallUI.UpdateSetText end.*/

            /*SelectBallUI.RandomBall start.*/
            RandomBall: function () {
if ( TRACE ) { TRACE( "SelectBallUI#RandomBall", this ); }

                var ballAmount = this.selectBall.GetBallAmount();

                var ballIndex = UnityEngine.Random.Range(0, ballAmount);

                this.selectBall.ScrollBall(ballIndex);
            },
            /*SelectBallUI.RandomBall end.*/

            /*SelectBallUI.ChangeBall start.*/
            ChangeBall: function () {
if ( TRACE ) { TRACE( "SelectBallUI#ChangeBall", this ); }

                GameManager.Instance.HideSelectBall();
                this.selectBall.ChangeSkinBall();
            },
            /*SelectBallUI.ChangeBall end.*/

            /*SelectBallUI.ChangeNextBall start.*/
            ChangeNextBall: function () {
if ( TRACE ) { TRACE( "SelectBallUI#ChangeNextBall", this ); }

                this.selectBall.ScrollBall(((this.selectBall.currentBallIndex + 1) | 0));
            },
            /*SelectBallUI.ChangeNextBall end.*/


        }
    });
    /*SelectBallUI end.*/

    /*SoundManager start.*/
    Bridge.define("SoundManager", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            music: null,
            gameCompleteSfxPrefab: null,
            gameCompleteMusicPrefab: null,
            ballCollideSfxPrefab: null,
            basketPerfectSfxPrefab: null,
            strikeCheer2SfxPrefab: null
        },
        methods: {
            /*SoundManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "SoundManager#Start", this ); }

                GameManager.Instance.addOnBallCollide(Bridge.fn.cacheBind(this, this.GameManager_OnBallCOllide));
                GameManager.Instance.addOnPerfect(Bridge.fn.cacheBind(this, this.GameManager_OnPerfect));
                GameManager.Instance.addOnGameComplete(Bridge.fn.cacheBind(this, this.GameManager_OnGameComplete));
                GameManager.Instance.addOnGameStart(Bridge.fn.cacheBind(this, this.GameManager_OnGameStart));

                this.music.Play();
            },
            /*SoundManager.Start end.*/

            /*SoundManager.GameManager_OnBallCOllide start.*/
            GameManager_OnBallCOllide: function () {
if ( TRACE ) { TRACE( "SoundManager#GameManager_OnBallCOllide", this ); }

                var sfxTransform = UnityEngine.Object.Instantiate(UnityEngine.Transform, this.ballCollideSfxPrefab);
                sfxTransform.SetParent(this.transform);

                this.Destroy(sfxTransform.gameObject, 5.0);
            },
            /*SoundManager.GameManager_OnBallCOllide end.*/

            /*SoundManager.GameManager_OnPerfect start.*/
            GameManager_OnPerfect: function () {
if ( TRACE ) { TRACE( "SoundManager#GameManager_OnPerfect", this ); }

                var sfxTransform = UnityEngine.Object.Instantiate(UnityEngine.Transform, this.basketPerfectSfxPrefab);
                sfxTransform.SetParent(this.transform);

                this.Destroy(sfxTransform.gameObject, 5.0);
            },
            /*SoundManager.GameManager_OnPerfect end.*/

            /*SoundManager.GameManager_OnGameStart start.*/
            GameManager_OnGameStart: function () {
if ( TRACE ) { TRACE( "SoundManager#GameManager_OnGameStart", this ); }

                this.music.Play();
            },
            /*SoundManager.GameManager_OnGameStart end.*/

            /*SoundManager.GameManager_OnGameComplete start.*/
            GameManager_OnGameComplete: function () {
if ( TRACE ) { TRACE( "SoundManager#GameManager_OnGameComplete", this ); }

                this.music.Pause();

                var sfxTransform = UnityEngine.Object.Instantiate(UnityEngine.Transform, this.gameCompleteSfxPrefab);
                sfxTransform.SetParent(this.transform);

                this.Destroy(sfxTransform.gameObject, 10.0);

                var sfx1Transform = UnityEngine.Object.Instantiate(UnityEngine.Transform, this.gameCompleteMusicPrefab);
                sfx1Transform.SetParent(this.transform);
                this.Destroy(sfx1Transform.gameObject, 10.0);
            },
            /*SoundManager.GameManager_OnGameComplete end.*/


        }
    });
    /*SoundManager end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","System.Collections","TMPro","System.Collections.Generic","UnityEngine.UI"];

    /*BallHandler start.*/
    $m("BallHandler", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":1,"n":"OnCollisionEnter","t":8,"pi":[{"n":"collision","pt":$n[1].Collision,"ps":0}],"sn":"OnCollisionEnter","rt":$n[0].Void,"p":[$n[1].Collision]},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"checkedTopTrigger","t":4,"rt":$n[0].Boolean,"sn":"checkedTopTrigger","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isPerfect","t":4,"rt":$n[0].Boolean,"sn":"isPerfect","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"rb","t":4,"rt":$n[1].Rigidbody,"sn":"rb"}]}; }, $n);
    /*BallHandler end.*/

    /*BallScriptableObject start.*/
    $m("BallScriptableObject", function () { return {"att":1048577,"a":2,"at":[Bridge.apply(new UnityEngine.CreateAssetMenuAttribute(), {
        fileName: "Ball", menuName: "ScriptableObjects/Ball"
    } )],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ballIndex","t":4,"rt":$n[0].Int32,"sn":"ballIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"ballTexture","t":4,"rt":$n[1].Texture,"sn":"ballTexture"},{"a":2,"n":"name","t":4,"rt":$n[0].String,"sn":"name$1"}]}; }, $n);
    /*BallScriptableObject end.*/

    /*GameManager start.*/
    $m("GameManager", function () { return {"nested":[GameManager.dunkType],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"GameOver","t":8,"sn":"GameOver","rt":$n[0].Void},{"a":2,"n":"HideSelectBall","t":8,"sn":"HideSelectBall","rt":$n[0].Void},{"a":2,"n":"PlaySfxBallCollide","t":8,"sn":"PlaySfxBallCollide","rt":$n[0].Void},{"a":2,"n":"PlusPoint","t":8,"pi":[{"n":"dunkType","pt":GameManager.dunkType,"ps":0}],"sn":"PlusPoint","rt":$n[0].Void,"p":[GameManager.dunkType]},{"a":2,"n":"QuitGame","t":8,"sn":"QuitGame","rt":$n[0].Void},{"a":1,"n":"SetUpScore","t":8,"sn":"SetUpScore","rt":$n[0].Void},{"a":2,"n":"StartGame","t":8,"sn":"StartGame","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"WaitBeforeSet","t":8,"sn":"WaitBeforeSet","rt":$n[2].IEnumerator},{"a":1,"n":"showPerfectText","t":8,"sn":"showPerfectText","rt":$n[2].IEnumerator},{"a":2,"n":"showSelectBall","t":8,"sn":"showSelectBall","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"ChainLightsFull","t":4,"rt":$n[1].ParticleSystem,"sn":"ChainLightsFull"},{"a":2,"n":"Instance","is":true,"t":4,"rt":GameManager,"sn":"Instance"},{"a":1,"n":"_playTime","t":4,"rt":$n[0].Single,"sn":"_playTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"buttonPanelGameObject","t":4,"rt":$n[1].GameObject,"sn":"buttonPanelGameObject"},{"a":1,"n":"canCountTime","t":4,"rt":$n[0].Boolean,"sn":"canCountTime","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"gameoverUIGameObject","t":4,"rt":$n[1].GameObject,"sn":"gameoverUIGameObject"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"highestGameOverText","t":4,"rt":$n[3].TextMeshProUGUI,"sn":"highestGameOverText"},{"a":1,"n":"highestScore","t":4,"rt":$n[0].Single,"sn":"highestScore","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"highestText","t":4,"rt":$n[3].TextMeshPro,"sn":"highestText"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"newHightScoreImageGameObject","t":4,"rt":$n[1].GameObject,"sn":"newHightScoreImageGameObject"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"normalDunkScore","t":4,"rt":$n[0].Int32,"sn":"normalDunkScore","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"perfectDunkScore","t":4,"rt":$n[0].Int32,"sn":"perfectDunkScore","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("VFX"),new UnityEngine.SpaceAttribute.ctor(),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"perfectParticle","t":4,"rt":$n[1].ParticleSystem,"sn":"perfectParticle"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"perfectTextGameObject","t":4,"rt":$n[1].GameObject,"sn":"perfectTextGameObject"},{"at":[new UnityEngine.HeaderAttribute("Settings"),new UnityEngine.SpaceAttribute.ctor(),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"playTime","t":4,"rt":$n[0].Single,"sn":"playTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"player","t":4,"rt":PlayerController,"sn":"player"},{"a":1,"n":"score","t":4,"rt":$n[0].Single,"sn":"score","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"scoreGameOverText","t":4,"rt":$n[3].TextMeshProUGUI,"sn":"scoreGameOverText"},{"at":[new UnityEngine.HeaderAttribute("References"),new UnityEngine.SpaceAttribute.ctor(),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"scoreText","t":4,"rt":$n[3].TextMeshPro,"sn":"scoreText"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"selectBallGameObject","t":4,"rt":$n[1].GameObject,"sn":"selectBallGameObject"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"timeText","t":4,"rt":$n[3].TextMeshPro,"sn":"timeText"},{"a":2,"n":"OnBallCollide","t":2,"ad":{"a":2,"n":"add_OnBallCollide","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnBallCollide","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnBallCollide","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnBallCollide","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"OnGameComplete","t":2,"ad":{"a":2,"n":"add_OnGameComplete","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnGameComplete","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnGameComplete","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnGameComplete","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"OnGameStart","t":2,"ad":{"a":2,"n":"add_OnGameStart","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnGameStart","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnGameStart","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnGameStart","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"OnPerfect","t":2,"ad":{"a":2,"n":"add_OnPerfect","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnPerfect","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnPerfect","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnPerfect","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*GameManager end.*/

    /*GameManager+dunkType start.*/
    $m("GameManager.dunkType", function () { return {"td":GameManager,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"normal","is":true,"t":4,"rt":GameManager.dunkType,"sn":"normal","box":function ($v) { return Bridge.box($v, GameManager.dunkType, System.Enum.toStringFn(GameManager.dunkType));}},{"a":2,"n":"perfect","is":true,"t":4,"rt":GameManager.dunkType,"sn":"perfect","box":function ($v) { return Bridge.box($v, GameManager.dunkType, System.Enum.toStringFn(GameManager.dunkType));}}]}; }, $n);
    /*GameManager+dunkType end.*/

    /*PlayerController start.*/
    $m("PlayerController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"BeginTouch","t":8,"pi":[{"n":"touchPos","pt":$n[1].Vector3,"ps":0}],"sn":"BeginTouch","rt":$n[0].Void,"p":[$n[1].Vector3]},{"a":1,"n":"ConvertValue","t":8,"pi":[{"n":"value","pt":$n[0].Single,"ps":0},{"n":"min","pt":$n[0].Single,"ps":1},{"n":"max","pt":$n[0].Single,"ps":2}],"sn":"ConvertValue","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"ConvertValue","t":8,"pi":[{"n":"value","pt":$n[0].Single,"ps":0},{"n":"oldmin","pt":$n[0].Single,"ps":1},{"n":"oldmax","pt":$n[0].Single,"ps":2},{"n":"newmin","pt":$n[0].Single,"ps":3},{"n":"newmax","pt":$n[0].Single,"ps":4}],"sn":"ConvertValue$1","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"EndTouch","t":8,"sn":"EndTouch","rt":$n[0].Void},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":1,"n":"HoldingBall","t":8,"pi":[{"n":"touchPos","pt":$n[1].Vector3,"ps":0}],"sn":"HoldingBall","rt":$n[0].Void,"p":[$n[1].Vector3]},{"a":2,"n":"SetCanSelect","t":8,"pi":[{"n":"canSelect","pt":$n[0].Boolean,"ps":0}],"sn":"SetCanSelect","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"SetHoldBall","t":8,"pi":[{"n":"canHold","pt":$n[0].Boolean,"ps":0}],"sn":"SetHoldBall","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Swiping","t":8,"pi":[{"n":"touchPos","pt":$n[1].Vector3,"ps":0}],"sn":"Swiping","rt":$n[0].Void,"p":[$n[1].Vector3]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"canHoldBall","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_canHoldBall","t":8,"rt":$n[0].Boolean,"fg":"canHoldBall","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_canHoldBall","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"canHoldBall"},"fn":"canHoldBall"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"ballMask","t":4,"rt":$n[1].LayerMask,"sn":"ballMask"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"ballselectionTransform","t":4,"rt":$n[1].Transform,"sn":"ballselectionTransform"},{"a":1,"n":"canSelectBall","t":4,"rt":$n[0].Boolean,"sn":"canSelectBall","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"currentBallTransform","t":4,"rt":$n[1].Transform,"sn":"currentBallTransform"},{"a":1,"n":"distZ","t":4,"rt":$n[0].Single,"sn":"distZ","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"forceThrown","t":4,"rt":$n[0].Single,"sn":"forceThrown","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"forceTorque","t":4,"rt":$n[0].Single,"sn":"forceTorque","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"isHolding","t":4,"rt":$n[0].Boolean,"sn":"isHolding","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxDistanceHorizontal","t":4,"rt":$n[0].Single,"sn":"maxDistanceHorizontal","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxDistanceVerticle","t":4,"rt":$n[0].Single,"sn":"maxDistanceVerticle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"selectBall","t":4,"rt":SelectBall,"sn":"selectBall"},{"a":1,"n":"startTouchPos","t":4,"rt":$n[1].Vector3,"sn":"startTouchPos"},{"a":1,"n":"touch","t":4,"rt":$n[1].Touch,"sn":"touch"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"touchTrailGameObject","t":4,"rt":$n[1].GameObject,"sn":"touchTrailGameObject"},{"a":1,"backing":true,"n":"<canHoldBall>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"canHoldBall","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*PlayerController end.*/

    /*SelectBall start.*/
    $m("SelectBall", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ChangeSkinBall","t":8,"sn":"ChangeSkinBall","rt":$n[0].Void},{"a":2,"n":"GetBallAmount","t":8,"sn":"GetBallAmount","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"ScrollBall","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"ScrollBall","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"currentBallIndex","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_currentBallIndex","t":8,"rt":$n[0].Int32,"fg":"currentBallIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":1,"n":"set_currentBallIndex","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"currentBallIndex"},"fn":"currentBallIndex"},{"a":2,"n":"isRotating","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_isRotating","t":8,"rt":$n[0].Boolean,"fg":"isRotating","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_isRotating","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"isRotating"},"fn":"isRotating"},{"a":1,"n":"anglePerBall","t":4,"rt":$n[0].Single,"sn":"anglePerBall","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"ballAmount","t":4,"rt":$n[0].Int32,"sn":"ballAmount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"ballMaterial","t":4,"rt":$n[1].Material,"sn":"ballMaterial"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"ballScriptableObjects","t":4,"rt":$n[4].List$1(BallScriptableObject),"sn":"ballScriptableObjects"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"ballTransform","t":4,"rt":$n[4].List$1(UnityEngine.Transform),"sn":"ballTransform"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"ballselectionTransform","t":4,"rt":$n[1].Transform,"sn":"ballselectionTransform"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"currentBall","t":4,"rt":BallScriptableObject,"sn":"currentBall"},{"a":1,"n":"currentBallGameObject","t":4,"rt":$n[1].Transform,"sn":"currentBallGameObject"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"scrollSpeed","t":4,"rt":$n[0].Single,"sn":"scrollSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"selectBallUI","t":4,"rt":SelectBallUI,"sn":"selectBallUI"},{"a":1,"n":"targetRotation","t":4,"rt":$n[1].Vector3,"sn":"targetRotation"},{"a":1,"backing":true,"n":"<currentBallIndex>k__BackingField","t":4,"rt":$n[0].Int32,"sn":"currentBallIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<isRotating>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"isRotating","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*SelectBall end.*/

    /*SelectBallUI start.*/
    $m("SelectBallUI", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ChangeBall","t":8,"sn":"ChangeBall","rt":$n[0].Void},{"a":1,"n":"ChangeNextBall","t":8,"sn":"ChangeNextBall","rt":$n[0].Void},{"a":1,"n":"RandomBall","t":8,"sn":"RandomBall","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"UpdateSetText","t":8,"sn":"UpdateSetText","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"ArrowBtn","t":4,"rt":$n[5].Button,"sn":"ArrowBtn"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"okBtn","t":4,"rt":$n[5].Button,"sn":"okBtn"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"randomBtn","t":4,"rt":$n[5].Button,"sn":"randomBtn"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"selectBall","t":4,"rt":SelectBall,"sn":"selectBall"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"selectImageGameObject","t":4,"rt":$n[1].GameObject,"sn":"selectImageGameObject"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"setText","t":4,"rt":$n[3].TextMeshProUGUI,"sn":"setText"}]}; }, $n);
    /*SelectBallUI end.*/

    /*SoundManager start.*/
    $m("SoundManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"GameManager_OnBallCOllide","t":8,"sn":"GameManager_OnBallCOllide","rt":$n[0].Void},{"a":1,"n":"GameManager_OnGameComplete","t":8,"sn":"GameManager_OnGameComplete","rt":$n[0].Void},{"a":1,"n":"GameManager_OnGameStart","t":8,"sn":"GameManager_OnGameStart","rt":$n[0].Void},{"a":1,"n":"GameManager_OnPerfect","t":8,"sn":"GameManager_OnPerfect","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"ballCollideSfxPrefab","t":4,"rt":$n[1].Transform,"sn":"ballCollideSfxPrefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"basketPerfectSfxPrefab","t":4,"rt":$n[1].Transform,"sn":"basketPerfectSfxPrefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"gameCompleteMusicPrefab","t":4,"rt":$n[1].Transform,"sn":"gameCompleteMusicPrefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"gameCompleteSfxPrefab","t":4,"rt":$n[1].Transform,"sn":"gameCompleteSfxPrefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"music","t":4,"rt":$n[1].AudioSource,"sn":"music"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"strikeCheer2SfxPrefab","t":4,"rt":$n[1].Transform,"sn":"strikeCheer2SfxPrefab"}]}; }, $n);
    /*SoundManager end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});
