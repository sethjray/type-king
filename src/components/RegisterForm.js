/** @format */
//******************************************************************************
// RegisterForm.js
// Holds the RegisterForm function that handles taking a new users info
//
//
//import Recaptcha from 'react-recaptcha'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
	makeStyles,
	TextField,
	Grid,
	Typography,
	InputAdornment,
	IconButton,
	Button,
	Select,
	MenuItem,
	FormControl,
	InputLabel,
} from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import Validator from 'email-validator'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	field: {
		width: '30vw',
		minWidth: '250px',
	},
	link: {
		color: theme.palette.secondary.main,
		textDecoration: 'underline',
	},
	error: {
		color: theme.palette.error.main,
	},
	formControl: {
		width: '30vw',
		minWidth: '250px',
	},
}))

export default function RegisterForm(props) {
	const classes = useStyles()
	const [verified, setVerified] = React.useState(false)
	const [skillOpen, setSkillOpen] = React.useState(false)
	const [accountCreated, setAccountCreated] = React.useState(false)
	const [directory, setDirectory] = React.useState('/register')
	const [values, setValues] = React.useState({
		name: '',
		email: '',
		confirmEmail: '',
		password: '',
		confirmPassword: '',
		skillQuestion: '',
		showPassword: false,
		showConfirmPassword: false,
		submitAttempted: false,
		emailExists: false,
	})
	useEffect(() => {
		if (Validator.validate(values.email) === true)
			if (values.email === values.confirmEmail)
				if (values.password !== '')
					if (values.password === values.confirmPassword)
						if (values.skillQuestion !== ''){
							setDirectory('/register/confirm')
						}
	})

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value })
	}

	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword })
	}

	const handleSkillOpen = () => {
		setSkillOpen(true)
	}

	const handleSkillClose = () => {
		setSkillOpen(false)
	}

	const handleClickShowConfirmPassword = () => {
		setValues({ ...values, showConfirmPassword: !values.showConfirmPassword })
	}

	const handleMouseDownPassword = (event) => {
		event.preventDefault()
	}

	const onSubmit = (e) => {
		e.preventDefault()
		setValues({ ...values, submitAttempted: true })
		if (Validator.validate(values.email) === true)
			if (values.email === values.confirmEmail)
				if (values.password !== '')
					if (values.password === values.confirmPassword)
						if (values.skillQuestion !== ''){
							let exists = !props.createUser(
								values.name,
								values.email,
								values.password,
								values.skillQuestion
							)
							setAccountCreated(true)
							setValues({ ...values, emailExists: exists })
						}
	}
	//}

	return (
		<main className={classes.root}>
			<form>
				<Grid
					style={{ minHeight: '100vh', textAlign: 'center' }}
					direction="column"
					justify="center"
					alignItems="center"
					container
				>
					<Grid item>
						<Typography
							style={{
								padding: 2,
								fontWeight: 'bold',
								fontSize: 42,
							}}
						>
							Begin your TypeKing journey!
						</Typography>
					</Grid>
					{values.emailExists && (
						<Grid item>
							<Typography className={classes.error} style={{ padding: 5, fontSize: 16 }}>
								a user with that email already exists
							</Typography>
						</Grid>
					)}
					<Grid item>
						<TextField
							className={classes.field}
							name="name"
							label="Name"
							margin="normal"
							value={values.name}
							onChange={handleChange('name')}
							error={values.submitAttempted && values.name === ''}
							helperText={
								values.submitAttempted && values.name === '' ? 'this field cannot be empty' : ''
							}
						/>
					</Grid>
					<Grid item>
						<TextField
							className={classes.field}
							name="email"
							label="Email"
							margin="normal"
							value={values.email}
							onChange={handleChange('email')}
							error={
								(values.submitAttempted && values.email === '') ||
								(values.submitAttempted && Validator.validate(values.email) === false)
							}
							helperText={
								values.submitAttempted && values.email === ''
									? 'this field cannot be empty'
									: '' || (values.submitAttempted && Validator.validate(values.email) === false)
									? 'invalid email address'
									: ''
							}
						/>
					</Grid>
					<Grid item>
						<TextField
							className={classes.field}
							name="confirmEmail"
							label="Confirm Email"
							margin="normal"
							value={values.confirmEmail}
							onChange={handleChange('confirmEmail')}
							error={
								values.email !== values.confirmEmail ||
								(values.submitAttempted && values.confirmEmail === '')
							}
							helperText={
								values.submitAttempted && values.confirmEmail === ''
									? 'this field cannot be empty'
									: '' || values.email !== values.confirmEmail
									? 'emails do not match'
									: ''
							}
						/>
					</Grid>
					<Grid item>
						<TextField
							className={classes.field}
							name="pass"
							label="Password"
							margin="normal"
							type={values.showPassword ? 'text' : 'password'}
							value={values.password}
							onChange={handleChange('password')}
							error={values.submitAttempted && values.password === ''}
							helperText={
								values.submitAttempted && values.password === '' ? 'this field cannot be empty' : ''
							}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
										>
											{values.showPassword ? <Visibility /> : <VisibilityOff />}
										</IconButton>
									</InputAdornment>
								),
							}}
						/>
					</Grid>
					<Grid item>
						<TextField
							className={classes.field}
							name="confirmpass"
							label="Confirm Password"
							margin="normal"
							type={values.showConfirmPassword ? 'text' : 'password'}
							value={values.confirmpassword}
							onChange={handleChange('confirmPassword')}
							error={
								values.password !== values.confirmPassword ||
								(values.submitAttempted && values.confirmPassword === '')
							}
							helperText={
								values.submitAttempted && values.confirmPassword === ''
									? 'this field cannot be empty'
									: '' || values.password !== values.confirmPassword
									? 'passwords do not match'
									: ''
							}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowConfirmPassword}
											onMouseDown={handleMouseDownPassword}
										>
											{values.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
										</IconButton>
									</InputAdornment>
								),
							}}
						/>
					</Grid>
					<Grid item>
						<FormControl className={classes.formControl}>
							<InputLabel id="demo-controlled-open-select-label">Skill Level Question</InputLabel>
							<Select
								labelId="demo-controlled-open-select-label"
								id="demo-controlled-open-select"
								open={skillOpen}
								onClose={handleSkillClose}
								onOpen={handleSkillOpen}
								value={values.skillQuestion}
								onChange={handleChange('skillQuestion')}
								error={values.submitAttempted && values.skillQuestion === ''}
								helperText={
									values.submitAttempted && values.skillQuestion === ''
										? 'this field cannot be empty'
										: ''
								}
							>
								<MenuItem value={'I am a new typist'}>
									I am a new typist
								</MenuItem>
								<MenuItem value={"I am a beginner typist"}>
									I am a beginner typist
								</MenuItem>
								<MenuItem value={'I am a intermediate typist'}>
									I am a intermediate typist
								</MenuItem>
								<MenuItem value={'I am a advanced typist'}>
									I am a advanced typist
								</MenuItem>
								<MenuItem value={'I am a master typist'}>
									I am a master typist
								</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item>
						<Button
							style={{
								marginTop: 16,
								padding: 5,
								fontSize: 22,
								borderRadius: '50px',
								width: '260px',
							}}
							type="submit"
							color="primary"
							variant="contained"
							onClick={onSubmit}
						>
							<Link
								style={{
									color: 'inherit',
									textDecoration: 'none',
								}}
								to={directory}
							>
								Submit
							</Link>
						</Button>
					</Grid>

					<Grid item>
						<Typography style={{ padding: 5, fontSize: 16 }}>
							<Link className={classes.link} to="/">
								Go back
							</Link>
						</Typography>
					</Grid>
				</Grid>
			</form>
		</main>
	)
}
