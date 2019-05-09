class BasicInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h3",
        null,
        "Basic Info (F1:)"
      ),
      React.createElement(
        "form",
        { method: "post", action: "", data: "json" },
        React.createElement(
          "p",
          null,
          "Name:"
        ),
        React.createElement("input", { type: "text", placeholder: "What's your name?", onChange: e => this.props.enterInfo(this, e, 'name') }),
        React.createElement(
          "p",
          null,
          "Email:"
        ),
        React.createElement("input", { type: "text", placeholder: "What's your email?", onChange: e => this.props.enterInfo(this, e, 'email') }),
        React.createElement(
          "p",
          null,
          "Password:"
        ),
        React.createElement("input", { type: "text", placeholder: "What's your password", onChange: e => this.props.enterInfo(this, e, 'password') }),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement(
          "button",
          { onClick: e => this.props.goFormTwo(e, this.state) },
          "Next!"
        )
      )
    );
  }
}

class ShippingInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h3",
        null,
        "Shipping Info (F2:)"
      ),
      React.createElement(
        "form",
        { method: "post", action: "", data: "json" },
        React.createElement(
          "p",
          null,
          "Address Line 1 (street name:)"
        ),
        React.createElement("input", { type: "text", placeholder: "What's your street?", onChange: e => this.props.enterInfo(this, e, 'street') }),
        React.createElement(
          "p",
          null,
          "Address Line 2 (apartment #:)"
        ),
        React.createElement("input", { type: "text", placeholder: "What's your apt. number?", onChange: e => this.props.enterInfo(this, e, 'apartment') }),
        React.createElement(
          "p",
          null,
          "City:"
        ),
        React.createElement("input", { type: "text", placeholder: "What's your city?", onChange: e => this.props.enterInfo(this, e, 'city') }),
        React.createElement(
          "p",
          null,
          "State:"
        ),
        React.createElement("input", { type: "text", placeholder: "What's your state?", onChange: e => this.props.enterInfo(this, e, 'state') }),
        React.createElement(
          "p",
          null,
          "Zip Code:"
        ),
        React.createElement("input", { type: "text", placeholder: "What's your zip code?", onChange: e => this.props.enterInfo(this, e, 'zipCode') }),
        React.createElement(
          "p",
          null,
          "Phone Number:"
        ),
        React.createElement("input", { type: "text", placeholder: "What's your number?", onChange: e => this.props.enterInfo(this, e, 'phone') }),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement(
          "button",
          { onClick: this.props.goFormThree },
          "Next!"
        )
      )
    );
  }
}

class PaymentInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h3",
        null,
        "Payment Info (F3:)"
      ),
      React.createElement(
        "form",
        { method: "post", action: "", data: "json" },
        React.createElement(
          "p",
          null,
          "Credit Card Number:"
        ),
        React.createElement("input", { type: "text", placeholder: "What's your card number?", onChange: e => this.props.enterInfo(this, e, 'cardNumber') }),
        React.createElement(
          "p",
          null,
          "Credit Card Exp. Date:"
        ),
        React.createElement("input", { type: "text", placeholder: "What's its exp. date?", onChange: e => this.props.enterInfo(this, e, 'expDate') }),
        React.createElement(
          "p",
          null,
          "CVV "
        ),
        React.createElement("input", { type: "text", placeholder: "What's its C.V.V.?", onChange: e => this.props.enterInfo(this, e, 'cvv') }),
        React.createElement(
          "p",
          null,
          "Billing Zip Code"
        ),
        React.createElement("input", { type: "text", placeholder: "What's its billing zip?", onChange: e => this.props.enterInfo(this, e, 'billingZip') }),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement(
          "button",
          { onClick: this.props.goFormFour },
          "Next!"
        )
      )
    );
  }
}

class PurchasePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h3",
        null,
        "Customer Summary (F4:)"
      ),
      React.createElement(
        "ul",
        null,
        React.createElement(
          "li",
          null,
          this.props.name
        ),
        React.createElement(
          "li",
          null,
          this.props.email
        ),
        React.createElement(
          "li",
          null,
          this.props.password
        ),
        React.createElement(
          "li",
          null,
          this.props.street
        ),
        React.createElement(
          "li",
          null,
          this.props.apartment
        ),
        React.createElement(
          "li",
          null,
          this.props.city
        ),
        React.createElement(
          "li",
          null,
          this.props.state
        ),
        React.createElement(
          "li",
          null,
          this.props.zipCode
        ),
        React.createElement(
          "li",
          null,
          this.props.phone
        ),
        React.createElement(
          "li",
          null,
          this.props.cardNumber
        ),
        React.createElement(
          "li",
          null,
          this.props.expDate
        ),
        React.createElement(
          "li",
          null,
          this.props.cvv
        ),
        React.createElement(
          "li",
          null,
          this.props.billingZip
        )
      ),
      React.createElement(
        "button",
        { onClick: this.props.sendData },
        "Checkout!"
      )
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      street: '',
      apartment: '',
      city: '',
      state: '',
      zipCode: '',
      phone: '',
      cardNumber: '',
      expDate: '',
      cvv: '',
      billingZip: '',
      displayedPage: 1
    };
  }

  goFormTwo(e) {
    e.preventDefault();
    console.log('Going to form TWO!');
    var nextPage = 2;
    this.setState({
      displayedPage: nextPage
    });
    return;
  }

  goFormThree(e) {
    e.preventDefault();
    console.log('Going to form THREE!');
    var nextPage = 3;
    this.setState({
      displayedPage: nextPage
    });
    return;
  }

  goFormFour(e) {
    e.preventDefault();
    console.log('Going to form FOUR!');
    var nextPage = 4;
    this.setState({
      displayedPage: nextPage
    });
    return;
  }

  enterInfo(e, datum) {
    var property = arguments[2];
    var event = arguments[1];
    this.setState({
      [property]: event.target.value
    });
  }

  sendData(e) {
    e.preventDefault();
    console.log('Sending user data!');

    return;
  }

  render() {
    if (this.state.displayedPage === 1) {
      return React.createElement(BasicInfo, { goFormTwo: this.goFormTwo.bind(this), enterInfo: this.enterInfo.bind(this) });
    }
    if (this.state.displayedPage === 2) {
      return React.createElement(ShippingInfo, { goFormThree: this.goFormThree.bind(this), enterInfo: this.enterInfo.bind(this) });
    }
    if (this.state.displayedPage === 3) {
      return React.createElement(PaymentInfo, { goFormFour: this.goFormFour.bind(this), enterInfo: this.enterInfo.bind(this) });
    }
    if (this.state.displayedPage === 4) {
      return React.createElement(PurchasePage, { sendData: this.sendData.bind(this), name: this.state.name, email: this.state.email, password: this.state.password, street: this.state.street, apartment: this.state.apartment, city: this.state.city, state: this.state.state, zipCode: this.state.zipCode, phone: this.state.phone, cardNumber: this.state.cardNumber, expDate: this.state.expDate, cvv: this.state.cvv, billingZip: this.state.billingZip });
    }
    return;
  }
}

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BcHAuanMiXSwibmFtZXMiOlsiQmFzaWNJbmZvIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJyZW5kZXIiLCJlIiwiZW50ZXJJbmZvIiwiZ29Gb3JtVHdvIiwiU2hpcHBpbmdJbmZvIiwiZ29Gb3JtVGhyZWUiLCJQYXltZW50SW5mbyIsImdvRm9ybUZvdXIiLCJQdXJjaGFzZVBhZ2UiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInN0cmVldCIsImFwYXJ0bWVudCIsImNpdHkiLCJ6aXBDb2RlIiwicGhvbmUiLCJjYXJkTnVtYmVyIiwiZXhwRGF0ZSIsImN2diIsImJpbGxpbmdaaXAiLCJzZW5kRGF0YSIsIkFwcCIsImRpc3BsYXllZFBhZ2UiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJuZXh0UGFnZSIsInNldFN0YXRlIiwiZGF0dW0iLCJwcm9wZXJ0eSIsImFyZ3VtZW50cyIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJiaW5kIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxTQUFOLFNBQXdCQyxNQUFNQyxTQUE5QixDQUF3QztBQUN0Q0MsY0FBWUMsS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLEVBQWI7QUFHRDs7QUFFREMsV0FBUztBQUNQLFdBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGO0FBR0U7QUFBQTtBQUFBLFVBQU0sUUFBTyxNQUFiLEVBQW9CLFFBQU8sRUFBM0IsRUFBOEIsTUFBSyxNQUFuQztBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFLHVDQUFPLE1BQUssTUFBWixFQUFtQixhQUFZLG1CQUEvQixFQUFtRCxVQUFXQyxDQUFELElBQU8sS0FBS0gsS0FBTCxDQUFXSSxTQUFYLENBQXFCLElBQXJCLEVBQTJCRCxDQUEzQixFQUE4QixNQUE5QixDQUFwRSxHQUZG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QyxhQUFRLG9CQUFDLFlBQUQsSUFBYyxVQUFVLEtBQUtGLFFBQUwsQ0FBY2MsSUFBZCxDQUFtQixJQUFuQixDQUF4QixFQUFrRCxNQUFNLEtBQUtwQyxLQUFMLENBQVdVLElBQW5FLEVBQXlFLE9BQU8sS0FBS1YsS0FBTCxDQUFXVyxLQUEzRixFQUFrRyxVQUFVLEtBQUtYLEtBQUwsQ0FBV1ksUUFBdkgsRUFBaUksUUFBUSxLQUFLWixLQUFMLENBQVdhLE1BQXBKLEVBQTRKLFdBQVcsS0FBS2IsS0FBTCxDQUFXYyxTQUFsTCxFQUE2TCxNQUFNLEtBQUtkLEtBQUwsQ0FBV2UsSUFBOU0sRUFBb04sT0FBTyxLQUFLZixLQUFMLENBQVdBLEtBQXRPLEVBQTZPLFNBQVMsS0FBS0EsS0FBTCxDQUFXZ0IsT0FBalEsRUFBMFEsT0FBTyxLQUFLaEIsS0FBTCxDQUFXaUIsS0FBNVIsRUFBbVMsWUFBWSxLQUFLakIsS0FBTCxDQUFXa0IsVUFBMVQsRUFBc1UsU0FBUyxLQUFLbEIsS0FBTCxDQUFXbUIsT0FBMVYsRUFBbVcsS0FBSyxLQUFLbkIsS0FBTCxDQUFXb0IsR0FBblgsRUFBd1gsWUFBWSxLQUFLcEIsS0FBTCxDQUFXcUIsVUFBL1ksR0FBUjtBQUNEO0FBQ0Q7QUFDRDtBQWhGK0I7O0FBbUZsQyxlQUFlRSxHQUFmIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJhc2ljSW5mbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMz5CYXNpYyBJbmZvIChGMTopPC9oMz5cblxuICAgICAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgYWN0aW9uPVwiXCIgZGF0YT1cImpzb25cIj5cbiAgICAgICAgICA8cD5OYW1lOjwvcD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIldoYXQncyB5b3VyIG5hbWU/XCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnByb3BzLmVudGVySW5mbyh0aGlzLCBlLCAnbmFtZScpfS8+XG5cbiAgICAgICAgICA8cD5FbWFpbDo8L3A+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJXaGF0J3MgeW91ciBlbWFpbD9cIiBvbkNoYW5nZT17KGUpID0+IHRoaXMucHJvcHMuZW50ZXJJbmZvKHRoaXMsIGUsICdlbWFpbCcpfS8+XG5cbiAgICAgICAgICA8cD5QYXNzd29yZDo8L3A+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJXaGF0J3MgeW91ciBwYXNzd29yZFwiIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5wcm9wcy5lbnRlckluZm8odGhpcywgZSwgJ3Bhc3N3b3JkJyl9Lz5cblxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KGUpID0+IHRoaXMucHJvcHMuZ29Gb3JtVHdvKGUsIHRoaXMuc3RhdGUpfT5OZXh0ITwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBTaGlwcGluZ0luZm8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDM+U2hpcHBpbmcgSW5mbyAoRjI6KTwvaDM+XG4gICAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIiBhY3Rpb249XCJcIiBkYXRhPVwianNvblwiPlxuXG4gICAgICAgICAgPHA+QWRkcmVzcyBMaW5lIDEgKHN0cmVldCBuYW1lOik8L3A+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIldoYXQncyB5b3VyIHN0cmVldD9cIiBvbkNoYW5nZT17KGUpID0+IHRoaXMucHJvcHMuZW50ZXJJbmZvKHRoaXMsIGUsICdzdHJlZXQnKX0vPlxuXG4gICAgICAgICAgPHA+QWRkcmVzcyBMaW5lIDIgKGFwYXJ0bWVudCAjOik8L3A+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIldoYXQncyB5b3VyIGFwdC4gbnVtYmVyP1wiIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5wcm9wcy5lbnRlckluZm8odGhpcywgZSwgJ2FwYXJ0bWVudCcpfS8+XG5cbiAgICAgICAgICA8cD5DaXR5OjwvcD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiV2hhdCdzIHlvdXIgY2l0eT9cIiBvbkNoYW5nZT17KGUpID0+IHRoaXMucHJvcHMuZW50ZXJJbmZvKHRoaXMsIGUsICdjaXR5Jyl9Lz5cblxuICAgICAgICAgIDxwPlN0YXRlOjwvcD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiV2hhdCdzIHlvdXIgc3RhdGU/XCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnByb3BzLmVudGVySW5mbyh0aGlzLCBlLCAnc3RhdGUnKX0vPlxuXG4gICAgICAgICAgPHA+WmlwIENvZGU6PC9wPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJXaGF0J3MgeW91ciB6aXAgY29kZT9cIiBvbkNoYW5nZT17KGUpID0+IHRoaXMucHJvcHMuZW50ZXJJbmZvKHRoaXMsIGUsICd6aXBDb2RlJyl9Lz5cblxuICAgICAgICAgIDxwPlBob25lIE51bWJlcjo8L3A+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIldoYXQncyB5b3VyIG51bWJlcj9cIiBvbkNoYW5nZT17KGUpID0+IHRoaXMucHJvcHMuZW50ZXJJbmZvKHRoaXMsIGUsICdwaG9uZScpfS8+XG5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMuZ29Gb3JtVGhyZWV9Pk5leHQhPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBQYXltZW50SW5mbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMz5QYXltZW50IEluZm8gKEYzOik8L2gzPlxuICAgICAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgYWN0aW9uPVwiXCIgZGF0YT1cImpzb25cIj5cblxuICAgICAgICAgIDxwPkNyZWRpdCBDYXJkIE51bWJlcjo8L3A+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIldoYXQncyB5b3VyIGNhcmQgbnVtYmVyP1wiIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5wcm9wcy5lbnRlckluZm8odGhpcywgZSwgJ2NhcmROdW1iZXInKX0vPlxuXG4gICAgICAgICAgPHA+Q3JlZGl0IENhcmQgRXhwLiBEYXRlOjwvcD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiV2hhdCdzIGl0cyBleHAuIGRhdGU/XCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnByb3BzLmVudGVySW5mbyh0aGlzLCBlLCAnZXhwRGF0ZScpfS8+XG5cbiAgICAgICAgICA8cD5DVlYgPC9wPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJXaGF0J3MgaXRzIEMuVi5WLj9cIiBvbkNoYW5nZT17KGUpID0+IHRoaXMucHJvcHMuZW50ZXJJbmZvKHRoaXMsIGUsICdjdnYnKX0vPlxuXG4gICAgICAgICAgPHA+QmlsbGluZyBaaXAgQ29kZTwvcD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiV2hhdCdzIGl0cyBiaWxsaW5nIHppcD9cIiBvbkNoYW5nZT17KGUpID0+IHRoaXMucHJvcHMuZW50ZXJJbmZvKHRoaXMsIGUsICdiaWxsaW5nWmlwJyl9Lz5cblxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5nb0Zvcm1Gb3VyfT5OZXh0ITwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgUHVyY2hhc2VQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcblxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzPkN1c3RvbWVyIFN1bW1hcnkgKEY0Oik8L2gzPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPnt0aGlzLnByb3BzLm5hbWV9PC9saT5cbiAgICAgICAgICA8bGk+e3RoaXMucHJvcHMuZW1haWx9PC9saT5cbiAgICAgICAgICA8bGk+e3RoaXMucHJvcHMucGFzc3dvcmR9PC9saT5cbiAgICAgICAgICA8bGk+e3RoaXMucHJvcHMuc3RyZWV0fTwvbGk+XG4gICAgICAgICAgPGxpPnt0aGlzLnByb3BzLmFwYXJ0bWVudH08L2xpPlxuICAgICAgICAgIDxsaT57dGhpcy5wcm9wcy5jaXR5fTwvbGk+XG4gICAgICAgICAgPGxpPnt0aGlzLnByb3BzLnN0YXRlfTwvbGk+XG4gICAgICAgICAgPGxpPnt0aGlzLnByb3BzLnppcENvZGV9PC9saT5cbiAgICAgICAgICA8bGk+e3RoaXMucHJvcHMucGhvbmV9PC9saT5cbiAgICAgICAgICA8bGk+e3RoaXMucHJvcHMuY2FyZE51bWJlcn08L2xpPlxuICAgICAgICAgIDxsaT57dGhpcy5wcm9wcy5leHBEYXRlfTwvbGk+XG4gICAgICAgICAgPGxpPnt0aGlzLnByb3BzLmN2dn08L2xpPlxuICAgICAgICAgIDxsaT57dGhpcy5wcm9wcy5iaWxsaW5nWmlwfTwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5zZW5kRGF0YX0+Q2hlY2tvdXQhPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgZW1haWw6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgc3RyZWV0OiAnJyxcbiAgICAgIGFwYXJ0bWVudDogJycsXG4gICAgICBjaXR5OiAnJyxcbiAgICAgIHN0YXRlOiAnJyxcbiAgICAgIHppcENvZGU6ICcnLFxuICAgICAgcGhvbmU6ICcnLFxuICAgICAgY2FyZE51bWJlcjogJycsXG4gICAgICBleHBEYXRlOiAnJyxcbiAgICAgIGN2djogJycsXG4gICAgICBiaWxsaW5nWmlwOiAnJyxcbiAgICAgIGRpc3BsYXllZFBhZ2U6IDFcbiAgICB9XG4gIH1cblxuICBnb0Zvcm1Ud28oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZygnR29pbmcgdG8gZm9ybSBUV08hJylcbiAgICB2YXIgbmV4dFBhZ2UgPSAyO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGlzcGxheWVkUGFnZTogbmV4dFBhZ2VcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBnb0Zvcm1UaHJlZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKCdHb2luZyB0byBmb3JtIFRIUkVFIScpXG4gICAgdmFyIG5leHRQYWdlID0gMztcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRpc3BsYXllZFBhZ2U6IG5leHRQYWdlXG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZ29Gb3JtRm91cihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKCdHb2luZyB0byBmb3JtIEZPVVIhJylcbiAgICB2YXIgbmV4dFBhZ2UgPSA0O1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGlzcGxheWVkUGFnZTogbmV4dFBhZ2VcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBlbnRlckluZm8oZSwgZGF0dW0pIHtcbiAgICB2YXIgcHJvcGVydHkgPSBhcmd1bWVudHNbMl07XG4gICAgdmFyIGV2ZW50ID0gYXJndW1lbnRzWzFdO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW3Byb3BlcnR5XTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH1cblxuICBzZW5kRGF0YShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKCdTZW5kaW5nIHVzZXIgZGF0YSEnKTtcbiAgICBcbiAgICByZXR1cm47XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZGlzcGxheWVkUGFnZSA9PT0gMSkge1xuICAgICAgcmV0dXJuICg8QmFzaWNJbmZvIGdvRm9ybVR3bz17dGhpcy5nb0Zvcm1Ud28uYmluZCh0aGlzKX0gZW50ZXJJbmZvPXt0aGlzLmVudGVySW5mby5iaW5kKHRoaXMpfS8+KVxuICAgIH0gXG4gICAgaWYgKHRoaXMuc3RhdGUuZGlzcGxheWVkUGFnZSA9PT0gMikge1xuICAgICAgcmV0dXJuICg8U2hpcHBpbmdJbmZvIGdvRm9ybVRocmVlPXt0aGlzLmdvRm9ybVRocmVlLmJpbmQodGhpcyl9IGVudGVySW5mbz17dGhpcy5lbnRlckluZm8uYmluZCh0aGlzKX0vPilcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuZGlzcGxheWVkUGFnZSA9PT0gMykge1xuICAgICAgcmV0dXJuICg8UGF5bWVudEluZm8gZ29Gb3JtRm91cj17dGhpcy5nb0Zvcm1Gb3VyLmJpbmQodGhpcyl9IGVudGVySW5mbz17dGhpcy5lbnRlckluZm8uYmluZCh0aGlzKX0vPilcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuZGlzcGxheWVkUGFnZSA9PT0gNCkge1xuICAgICAgcmV0dXJuICg8UHVyY2hhc2VQYWdlIHNlbmREYXRhPXt0aGlzLnNlbmREYXRhLmJpbmQodGhpcyl9IG5hbWU9e3RoaXMuc3RhdGUubmFtZX0gZW1haWw9e3RoaXMuc3RhdGUuZW1haWx9IHBhc3N3b3JkPXt0aGlzLnN0YXRlLnBhc3N3b3JkfSBzdHJlZXQ9e3RoaXMuc3RhdGUuc3RyZWV0fSBhcGFydG1lbnQ9e3RoaXMuc3RhdGUuYXBhcnRtZW50fSBjaXR5PXt0aGlzLnN0YXRlLmNpdHl9IHN0YXRlPXt0aGlzLnN0YXRlLnN0YXRlfSB6aXBDb2RlPXt0aGlzLnN0YXRlLnppcENvZGV9IHBob25lPXt0aGlzLnN0YXRlLnBob25lfSBjYXJkTnVtYmVyPXt0aGlzLnN0YXRlLmNhcmROdW1iZXJ9IGV4cERhdGU9e3RoaXMuc3RhdGUuZXhwRGF0ZX0gY3Z2PXt0aGlzLnN0YXRlLmN2dn0gYmlsbGluZ1ppcD17dGhpcy5zdGF0ZS5iaWxsaW5nWmlwfS8+KVxuICAgIH1cbiAgICByZXR1cm5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHAiXX0=