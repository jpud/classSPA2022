import html from "html-literal";

export default () => html`
  <nav>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      <li><a href="#index">Home</a></li>
      <li><a href="#bio">Bio</a></li>
      <li><a href="#pizza">Pizza</a></li>
      <li><a href="#order">Order</a></li>
    </ul>
  </nav>
`;
