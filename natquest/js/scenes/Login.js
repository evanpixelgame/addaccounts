export class Login extends Phaser.Scene {
    constructor() {
        super({ key: 'Login' });
    }

    preload() {
        // Load assets for the login scene if any
    }

    create() {

        console.log('successfully managed to get to Login page, commencing trying to login:');
        // Create a simple login form
        this.add.text(100, 100, 'Login', { fontSize: '32px', fill: '#fff' });

        const usernameInput = this.add.dom(200, 200).createFromHTML('<input type="text" name="username" placeholder="Username">');
        const passwordInput = this.add.dom(200, 250).createFromHTML('<input type="password" name="password" placeholder="Password">');
        const loginButton = this.add.dom(200, 300).createFromHTML('<button>Login</button>');

        
        loginButton.addListener('click');
        loginButton.on('click', () => {
            const username = usernameInput.node.value;
            const password = passwordInput.node.value;

            // Example simple validation
            if (username === 'user' && password === 'pass') {
                // Save user session, transition to the main game scene
                localStorage.setItem('loggedIn', true);
                this.scene.start('MainGameScene');
            } else {
                console.log('Invalid credentials');
            }
        });
        
    }
}
