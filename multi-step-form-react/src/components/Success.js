import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Success = () => {
	return (
		<MuiThemeProvider>
			<>
				<AppBar title='Success' />
				<h1>Thank You For Your Submission</h1>
				<p>You will receive an email for further steps.</p>
			</>
		</MuiThemeProvider>
	);
};

export default Success;
