import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

function SignIn() {
  return (
    <section className="signin section">
      <h2 className="heading">Sign In</h2>
      <form className="form signin">
        <input placeholder="Username" className="form__input" required />
        <input placeholder="Password" className="form__input" required />

        <div className="form__check">
          <input id="checkbox" type="checkbox" className="form__checkbox" />
          <label htmlFor="checkbox">Stay signed in</label>
        </div>

        <button type="submit" className="form__btn">
          <ArrowRight className="form__btn--icon" />
        </button>
      </form>
      <button className="create-acc__btn">
        <span>Can&apos;t sign in?</span>
        <span>Create account</span>
      </button>
    </section>
  );
}

export default SignIn;
