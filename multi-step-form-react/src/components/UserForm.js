import { useState } from 'react';
import FormUserDetails from './FormUserDetails';
const UserForm = () => {
	const [step, setStep] = useState(1);
	const [fields, setFields] = useState({
		firstName: '',
		lastName: '',
		email: '',
		city: '',
		occupation: '',
		bio: '',
	});

	//proceed to next step
	const nextStep = () => {
		setStep(() => step + 1);
	};

	//proceed to prev step
	const prevStep = () => {
		setStep(() => step - 1);
	};

	//handle the change in fields
	const handleChange = (fieldName) => (event) => {
		setFields((prevState) => ({
			...prevState,
			[fieldName]: event.target.value,
		}));
	};
	const { firstName, lastName, email, occupation, city, bio } = fields;
	const values = { firstName, lastName, email, occupation, city, bio };

	switch (step) {
		case 1:
			return (
				<FormUserDetails
					nextStep={nextStep}
					handleChange={handleChange}
					values={values}
				/>
			);
		case 2:
			return <h1>FormPersonalDetails</h1>;
		case 3:
			return <h1>Confirm</h1>;
		case 4:
			return <h1>Success</h1>;
	}
};

export default UserForm;
