import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

const Confirm = ({ prevStep, nextStep, values }) => {
	//continue onto the next step of the form
	const continueToNext = (event) => {
		event.preventDefault();
		// process your form, send data to API //
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
				<AppBar title='Confirm User Data' />
				<List>
					<ListItem primaryText='FirstName' secondaryText={values.firstName} />
					<ListItem primaryText='LastName' secondaryText={values.lastName} />
					<ListItem primaryText='Email' secondaryText={values.email} />
					<ListItem
						primaryText='Occupation'
						secondaryText={values.occupation}
					/>
					<ListItem primaryText='City' secondaryText={values.city} />
					<ListItem primaryText='Bio' secondaryText={values.bio} />
				</List>
				<br />
				<RaisedButton
					label='Submit'
					primary={true}
					style={styles.button}
					onClick={continueToNext}
				/>
				<br />
				<RaisedButton
					label='Back'
					primary={false}
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
export default Confirm;
