import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const FormUserDetails = ({ nextStep, values, handleChange }) => {
	const continueToNext = (event) => {
		event.preventDefault();
		nextStep();
	};
	return (
		<MuiThemeProvider>
			<>
				<AppBar title='Enter User Details' />
				<TextField
					hintText='Enter Your First Name'
					floatingLabelText='First Name'
					onChange={handleChange('firstName')}
					defaultValue={values.firstName}
				/>
				<br />
				<TextField
					hintText='Enter Your Last Name'
					floatingLabelText='Last Name'
					onChange={handleChange('lastName')}
					defaultValue={values.lastName}
				/>
				<br />
				<TextField
					hintText='Enter Your Email'
					floatingLabelText='Email ID'
					onChange={handleChange('email')}
					defaultValue={values.email}
				/>
				<br />
				<RaisedButton
					label='Continue'
					primary={true}
					style={styles.button}
					onClick={continueToNext}
				/>
			</>
		</MuiThemeProvider>
	);
};

const styles = {
	button: {
		margin: 15,
	},
};
export default FormUserDetails;
