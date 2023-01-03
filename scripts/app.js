'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handleAction = _this.handleAction.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.handleDeleteSingleOption = _this.handleDeleteSingleOption.bind(_this);
    _this.state = {
      title: 'asdkjhsakjfhdskjf',
      subTitle: 'Let an app decide your world.',
      options: props.options
    };
    return _this;
  }

  // Lifecycle Methods


  _createClass(IndecisionApp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Fires when the component first gets mounted to the DOM
      console.log('Component is mounted');

      // Fetching Data from localstorage

      try {
        var options = JSON.parse(localStorage.getItem('options'));
        if (options) {
          this.setState(function () {
            return { options: options };
          });
        }
      } catch (e) {
        console.log(e);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      console.log('Component is updated'); // fires after the component gets updated, e.g. when state value or prop value changes

      // Saving Data to localstorage
      if (prevState.options.length !== this.state.options.length) {
        localStorage.setItem('options', JSON.stringify(this.state.options));
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      // Fires just before the component gets unmounted
      console.log('Component will be unmounted');
    }
  }, {
    key: 'handleDeleteOptions',
    value: function handleDeleteOptions() {
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: 'handleAction',
    value: function handleAction() {
      var randomItemIndex = Math.floor(Math.random() * this.state.options.length);
      window.alert('Your choice is ' + this.state.options[randomItemIndex]);
    }
  }, {
    key: 'handleAddOption',
    value: function handleAddOption(option) {
      if (!option) {
        return 'Please add a valid option!';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'Option already exists!';
      }

      this.setState(function (prevState) {
        var newOptionsArray = prevState.options;
        newOptionsArray.push(option);
        return { options: newOptionsArray };
      });
    }
  }, {
    key: 'handleDeleteSingleOption',
    value: function handleDeleteSingleOption(optionToRemove) {
      this.setState(function (prevState) {
        var newOptionsArray = prevState.options.filter(function (option) {
          return optionToRemove !== option;
        });
        // newOptionsArray.splice(newOptionsArray.indexOf(option), 1)
        return { options: newOptionsArray };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Header, { title: this.state.title }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          handleAction: this.handleAction
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions,
          handleDeleteSingleOption: this.handleDeleteSingleOption
        }),
        React.createElement(AddOption, { handleAddOption: this.handleAddOption })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
  options: []
};

var Header = function Header(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      props.title
    ),
    React.createElement(
      'h2',
      null,
      props.subTitle
    )
  );
};

Header.defaultProps = {
  title: 'Indecision App'
};

var Action = function Action(props) {
  return React.createElement(
    'button',
    {
      onClick: props.handleAction,
      disabled: !props.hasOptions
    },
    'What should I do?'
  );
};

var Options = function Options(props) {
  var handleDeleteSingleOption = function handleDeleteSingleOption(option) {
    props.handleDeleteSingleOption(option);
  };
  var optionsJSX = props.options.map(function (optionTxt, posIndex) {
    return React.createElement(Option, {
      key: posIndex,
      optionTxt: optionTxt,
      handleDeleteSingleOption: handleDeleteSingleOption
    });
  });

  return React.createElement(
    'div',
    null,
    props.options.length === 0 && React.createElement(
      'p',
      null,
      'No options in the queue'
    ),
    React.createElement(
      'ol',
      null,
      optionsJSX
    ),
    React.createElement(
      'button',
      { onClick: props.handleDeleteOptions },
      'Remove All'
    )
  );
};

var Option = function Option(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'li',
      null,
      props.optionTxt,
      React.createElement(
        'button',
        { onClick: function onClick(e) {
            return props.handleDeleteSingleOption(props.optionTxt);
          } },
        '\uD83D\uDEAB'
      )
    )
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: 'handleAddOption',
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);

      if (!error) {
        e.target.elements.option.value = '';
      }

      this.setState(function () {
        return {
          error: error
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'p',
          null,
          this.state.error
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleAddOption },
          React.createElement('input', { type: 'text', id: 'user-input', name: 'option' }),
          React.createElement(
            'button',
            null,
            'Add Option'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

var rootElement = document.getElementById('root');
var reactRoot = ReactDOM.createRoot(rootElement);
reactRoot.render(React.createElement(IndecisionApp, { options: ['John', 'Doe', 'Hello', 'World'] }));
