var camera, scene, renderer;
    
    var container = document.getElementById( 'container1' );
    
    var cameraControls;
    
    function init() {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera( 50, window.innerWidth /        window.innerHeight, 1, 1000 );
        camera.position.z = 125;

        var cameraControls;

        renderer = new THREE.WebGLRenderer({alpha:true});
        renderer.setSize( window.innerWidth*0.3, window.innerHeight );
        container.appendChild( renderer.domElement );

        cameraControls = new THREE.OrbitControls(camera, renderer.domElement);
        cameraControls.target.set( 0, 0, 0);
        cameraControls.maxDistance = 400;
        cameraControls.minDistance = 30;
        cameraControls.update();
        
        var geometry = new THREE.BoxGeometry( 50, 50, 50 );
        
        var wallMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff, map:THREE.ImageUtils.loadTexture('images/1.jpg') } );
        
        var materialArray = [];
        
            materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'images/1.jpg' ) }));
    
            materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'images/2.jpg' ) }));

            materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'images/3.jpg' ) }));

            materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'images/4.jpg' ) }));

            materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'images/5.jpg' ) }));

            materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'images/6.jpg' ) }));

        var dictionary = new THREE.MeshFaceMaterial( materialArray );
        
        var cube = new THREE.Mesh ( geometry, dictionary );
        
        scene.add(cube);
        
        }

    
    function animate() {

        requestAnimationFrame( animate );
        render();

        }

    function render() {

        renderer.render(scene, camera);
        };
    
    init();
    animate();