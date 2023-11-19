import {
  UserCircle,
  Lock,
  EnvelopeSimple,
} from "@phosphor-icons/react/dist/ssr";

function SignInError() {
  return (
    <section className="error-section">
      <div className="error-section__heading">
        <h1>Can&apos;t sign in?</h1>
        <h2>Wow! It sure sucks to be you!</h2>
      </div>

      <div className="options">
        <div className="options__option">
          <UserCircle className="options__option--icon" />
          <h3 className="options__option--heading">Forgot username?</h3>
          <p className="options__option--text">
            Wow how. We will send you an email or something
          </p>
        </div>

        <div className="options__option">
          <Lock className="options__option--icon" />
          <h3 className="options__option--heading">Lost your password?</h3>
          <p className="options__option--text">
            Lmao how? We will send you an email
          </p>
        </div>

        <div className="options__option">
          <EnvelopeSimple className="options__option--icon" />
          <h3 className="options__option--heading">Lost your email?</h3>
          <p className="options__option--text">
            How did you even do that? Honestly you are probably too young to
            even play this game
          </p>
        </div>
      </div>
    </section>
  );
}

export default SignInError;
