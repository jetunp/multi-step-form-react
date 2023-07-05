import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const FormPersonalDetails = ({ prevStep, nextStep, values, handleChange }) => {
	//continue onto the next step of the form
	const continueToNext = (event) => {
		event.preventDefault();
		nextStep();
	};

	//move back to the previous step of the form
	const moveToPrevious = (event) => {
		event.preventDefault();
		prevStep();
	};
	return (
		<MuiThemeProvider>
			<>
				<AppBar title='Enter User Personal Details' />
				<TextField
					hintText='Enter Your City'
					floatingLabelText='City'
					onChange={handleChange('city')}
					defaultValue={values.city}
				/>
				<br />
				<TextField
					hintText='Enter Your Occupation'
					floatingLabelText='Occupation'
					onChange={handleChange('occupation')}
					defaultValue={values.occupation}
				/>
				<br />
				<TextField
					hintText='Enter Your Bio'
					floatingLabelText='Bio'
					onChange={handleChange('bio')}
					defaultValue={values.bio}
				/>
				<br />
				<RaisedButton
					label='Continue'
					primary={true}
					style={styles.button}
					onClick={continueToNext}
				/>
				<br />
				<RaisedButton
					label='Back'
					primary={true}
					style={styles.button}
					onClick={moveToPrevious}
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
export default FormPersonalDetails;
