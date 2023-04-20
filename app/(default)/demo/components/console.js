import React from "react";

export default class Console extends React.Component {
  constructor(props) {
    super(props);
    this.customText = props.customText;
    this.text = props.text;
    this.consoleRef = React.createRef();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.consoleRef.current.scrollTop = this.consoleRef.current.scrollHeight;
  }

  state = {
    sidebarShow: "y-translate-100",
    logoState: "fas fa-chevron-up",
  };

  render() {
    return (
      <>
        <nav
          className={
            "block py-4 px-6 bottom-0 w-full bg-blueGray-800 shadow-xl right-0 fixed flex-row flex-nowrap xxl:z-10 z-9999 transition-all duration-300 ease-in-out transform " +
            this.state.sidebarShow
          }
        >
          <button
            className="flex items-center justify-center cursor-pointer text-blueGray-700 w-10 h-6 border-l-0 border-r border-t border-b border-solid border-blueGray-100 text-xl leading-none focus:outline-none bg-white rounded-r border border-solid border-transparent absolute left-9/10 top--10 z-9998"
            onClick={() => {
              if (this.state.sidebarShow === "y-translate-100") {
                this.setState({
                  sidebarShow: "y-translate-0",
                  logoState: "fas fa-chevron-down",
                });
              } else {
                this.setState({
                  sidebarShow: "y-translate-100",
                  logoState: "fas fa-chevron-up",
                });
              }
            }}
          >
            <i className={this.state.logoState} />
          </button>
          <div className="console">
            <textarea
              className="bg-blueGray-800 no-resize text-white w-full border-0"
              ref={this.consoleRef}
              rows={5}
              readOnly
              value={this.props.customText || this.props.text}
            />
          </div>
        </nav>
      </>
    );
  }
}

Console.defaultProps = {};

Console.propTypes = {};