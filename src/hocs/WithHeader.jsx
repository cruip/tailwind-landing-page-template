import Header from '../partials/Header';

const WithHeader = (Component) => {
	return function (props) {
		return (
			<>
				<Header />
				<Component {...props} />
			</>
		);
	};
};

export default WithHeader;
