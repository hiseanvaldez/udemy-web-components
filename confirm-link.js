class ConfirmLink extends HTMLAnchorElement {
  connectedCallback() {
    this.addEventListener("click", (event) => this._handleClick(event));
  }

  _handleClick(event) {
    if (!confirm("Do you really want to leave?")) {
      event.preventDefault();
      return;
    }
  }
}

customElements.define("uc-confirm-link", ConfirmLink, { extends: "a" });
