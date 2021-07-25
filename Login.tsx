import React, { useState } from 'react'
import {
    Grid,
    TextField,
    Button,
    makeStyles,
    createStyles,
    Theme,
} from '@material-ui/core'

import { Formik, Form, FormikProps } from 'formik'
import * as Yup from 'yup'
import Logo from '../image/logo-pie-people.svg'



import BackImage from '../image/Layer2.jpg'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {

            [theme.breakpoints.down('xs')]:{
                width: '319px',
                height: '512px',
                padding: '26.9px 24.6px 50.2px 25px',
                marginLeft: '100px',
                
            },
           [theme.breakpoints.up('sm')]:{
                width: '480px',
                height: '593.6px',
                padding: '37.9px 46.6px 49.8px 45.5px',
                marginLeft: '73px'
           },
           [theme.breakpoints.up('lg')]:{
                width: '480.3px',
                height: '606.6px',
                padding: '37.9px 46.4px 58.8px 45.5px',
                marginLeft: '199.5px'
           },
           [theme.breakpoints.up('xl')]:{
               width: '523.9px',
               height: '634.6px',
               marginLeft: '349px',
               marginRight: '349px'
           },
            borderRadius: '5px',
            border: 'solid 1px #e6e6e6',
            backgroundColor: '#ffffff',
          
        },
        textField: {
            '& > *': {
                margin: '0 auto',
                [theme.breakpoints.up('sm')]:{
                    width: '388px',
                    height:'63px'
                },
              
                [theme.breakpoints.down('xs')]:
                {
                    width: '269px',
                    height: '53px'
                },
                [theme.breakpoints.up('lg')]:
                {
                    width:'388px',
                    height: '63.1px'
                },
            },
        },
        input1:{
            border: 'solid 1px #e6e6e6',

            backgroundColor: '#ffffff',
            [theme.breakpoints.down('xs')]:{
                width: '269px',
                height: '40px'
            },
            [theme.breakpoints.up('sm')]:{
                width: '388px',
                height: '48px'
            },
            [theme.breakpoints.up('lg')]:
            {
                width:'388px',
                height: '48px',
                marginLeft: '16px',
            },
            [theme.breakpoints.up('xl')]:{
                width:'388px',
                height: '56px'
            },
        },
        input:{
            border: 'solid 1px #e6e6e6',
           
            backgroundColor: '#ffffff',
            [theme.breakpoints.down('xs')]:{
                marginLeft: '16px',
                width: '269px',
                height: '40px'
            },
            [theme.breakpoints.up('sm')]:{
                marginLeft: '16px',
                width: '388px',
                height: '48px'
            },
            [theme.breakpoints.up('lg')]:
            {
                width:'388px',
                height: '48px'
            },
            [theme.breakpoints.up('xl')]:{
                width:'388px',
                height: '56px'
            },
        },
        submitButton: {
            marginTop: '24px',
          
        },
        btn:{
           
            backgroundColor: '#3ab7d4',
            [theme.breakpoints.up('sm')]:{
                width: '386px',
                height: '50px'

            },
            [theme.breakpoints.down('xs')]:{
                width: '269px',
            },
            [theme.breakpoints.up('lg')]:{
                width:'386.7px',
                height: '56px'
            },
            [theme.breakpoints.up('xl')]:{
                width:'386.7px',
                height: '56.3px'
            },
        },
        title: { textAlign: 'center' },
        successMessage: { color: 'green' },
        errorMessage: { color: 'red' },
       logo:{
           [theme.breakpoints.down('xs')]:{
                  width: '91.3px',
                height: '91.3px',
                marginLeft: '114px', 
    }, 
        [theme.breakpoints.up('sm')]: {
            width: '115px',
            height: '115px',
            marginLeft:'183px'
        },
        [theme.breakpoints.up('lg')]:{
            width:'115.3px',
            height:'115.3px',
            marginLeft: '183px'
        },  
        [theme.breakpoints.up('xl')]:{
            width:'115.3px',
            height:'115.3px',
            marginLeft: '205px'
        },   
        margin: '0 auto',
       
        objectFit: 'contain'
       },
       email:{
       
           [theme.breakpoints.down('xs')]:{
               fontSize: '15px'
           },
           [theme.breakpoints.up('sm')]:
           {
                fontSize: '17px',
                textAlign: 'left',
               marginRight:'25px'
                
           },
           [theme.breakpoints.up('lg')]:
           {
                fontSize: '16px',
                marginRight: '380px',
                marginLeft: '16px',
           },
           [theme.breakpoints.up('xl')]:{
               fontSize: '18px'
           },
        fontFamily: 'Raleway',
        fontSize: '15px',    
        fontWeight: 'bold',    
        fontStretch: 'normal', 
        fontStyle: 'normal',
        lineHeight: '2.33',
        letterSpacing: '0.23px',
        textAlign: 'left',  
        color: '#474646',
        marginBottom: '30px'
       },
       password:{
        marginLeft: '16px',
        
        [theme.breakpoints.down('xs')]:{
            marginLeft: '16px',
            fontSize: '15px'
        },
        [theme.breakpoints.up('sm')]:
        {
            marginLeft: '16px',
            fontSize: '17px',
            textAlign: 'left',
        },
        [theme.breakpoints.up('lg')]:
        {
             fontSize: '16px',
             marginRight: '340px'
        },
        [theme.breakpoints.up('xl')]:{
            fontSize: '18px'
        },
        fontFamily: 'Raleway',
        fontSize: '15px',    
        fontWeight: 'bold',    
        fontStretch: 'normal', 
        fontStyle: 'normal',
        lineHeight: '2.33',
        letterSpacing: '0.23px',
        textAlign: 'left',  
        color: '#474646',
        marginBottom: '30px'
       },
       for:{
        [theme.breakpoints.down('xs')]:{
            marginLeft: '174px',
            fontSize: '14px'
        },
        [theme.breakpoints.up('sm')]:{
            fontSize: '17px',
           
            marginLeft:'274px'
        },
        [theme.breakpoints.up('xl')]:{
            fontSize: '18px'
        },
        fontFamily: 'Raleway',    
        fontSize: '14px' ,   
        textDecoration: 'none',
        fontStretch: 'normal',
        fontStyle: 'normal',   
        lineHeight: '2.5',  
        letterSpacing: 'normal',    
        textAlign: 'left',
        color: '#474646'

       },
       acont:{
        fontFamily: 'Raleway',
        fontSize: '14px'  ,
          
        [theme.breakpoints.down('xs')]:{
            fontSize: '14px'
        },
        [theme.breakpoints.up('sm')]:
        {
            fontSize: '17px',
            textAlign: 'left',
        },
        [theme.breakpoints.up('xl')]:{
            fontSize: '18px'
        },
        fontStretch: 'normal',     
        fontStyle: 'normal',     
        lineHeight: '2.5',    
        letterSpacing: 'normal', 
        textAlign: 'left',
        color: '#474646',
        marginTop: '30.8px',
        marginBottom: '50px',
       },
       sign:{
           textDecoration: 'none',
           fontWeight: 'bold',
           color: '#3ab7d4'
       },
       back:{
      
      
      
        [theme.breakpoints.down('xs')]:{
            width:'375px',
            height:'812px',
            padding: ' 165px 28px 135px'
        },
        [theme.breakpoints.up('sm')]:{
            width:'768px',
            height:'1024px',
            padding: ' 215px 143.7px 215.4px 144px'
        },
        [theme.breakpoints.up('md')]:{
            width: '960px',
            height:'1024px',
            padding:'299px 133.3px 308.5px 133px'
        },
      
        [theme.breakpoints.up('lg')]:{
            width:'1280px',
            height:'800px',
            padding: '96.7px 399.9px 96.7px 399.9px',
        },
        [theme.breakpoints.up('xl')]:{
            width:'1920px',
            height:'1080px',
            padding: '223px 698.1px 222.4px 698px'
        },
       }
    })
)

interface ILoginForm {
    email: string
    password: string
   
}

interface IFormStatus {
    message: string
    type: string
}

interface IFormStatusProps {
    [key: string]: IFormStatus
}

const formStatusProps: IFormStatusProps = {
    success: {
        message: 'sign in successfully.',
        type: 'success',
    },
    duplicate: {
        message: 'Email-id does not  exist. Please use different email-id.',
        type: 'error',
    },
    error: {
        message: 'Something went wrong. Please try again.',
        type: 'error',
    },
}

const Login: React.FunctionComponent = () => {
    const classes = useStyles()
    const [displayFormStatus, setDisplayFormStatus] = useState(false)
    const [formStatus, setFormStatus] = useState<IFormStatus>({
        message: '',
        type: '',
    })

    const userSign = async (data: ILoginForm, resetForm: Function) => {
        try {
           
            if (data) {
                setFormStatus(formStatusProps.success)
                resetForm({})
            }
        } catch (error) {
            const response = error.response
            if (
                response.data === 'this email or username does not exist' &&
                response.status === 400
            ) {
                setFormStatus(formStatusProps.duplicate)
            } else {
                setFormStatus(formStatusProps.error)
            }
        } finally {
            setDisplayFormStatus(true)
        }
    }

    return (
        <div style={{backgroundImage: `url(${BackImage})`,    objectFit: `contain`,

        opacity: `0.7` }} className={classes.back}>
           
            
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    
                    }}
                    onSubmit={(values: ILoginForm, actions) => {
                        userSign(values, actions.resetForm)
                        setTimeout(() => {
                            actions.setSubmitting(false)
                        }, 500)
                    }}
                    validationSchema={Yup.object().shape({
                   
                        email: Yup.string()
                            .email()
                            .required('Enter valid email-id'),
                        password: Yup.string()
                            .matches(
                                /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,20}\S$/
                            )
                            .required(
                                'Please valid password. One uppercase, one lowercase, one special character and no spaces'
                            ),
                   
                    })}
                >
                    {(props: FormikProps<ILoginForm>) => {
                        const {
                            values,
                            touched,
                            errors,
                            handleBlur,
                            handleChange,
                            isSubmitting,
                        } = props
                        return (
                            <div className={classes.root}>
                            <img src={Logo}  className={classes.logo}/>
                            <Form>
                            
                                <Grid
                                style={{padding: `5`}}
                                    container
                                    justify="space-around"
                                    direction="row"
                                >
                                    
                                <Grid
                                    item
                                    lg={12}
                                    md={10}
                                    sm={10}
                                    xs={10}
                                    className={classes.textField}
                                >
                                    <span className={classes.email}>Email</span>
                                    <TextField
                                        name="Email"
                                        id="email"
                                        InputProps={{className: classes.input1}}
                                        value={values.email}
                                        variant="outlined"
                                        type="email"
                                       
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        lg={12}
                                        md={10}
                                        sm={10}
                                        xs={10}
                                        className={classes.textField}
                                    >
                                        <span className={classes.password}>Password</span>
                                        <TextField
                                            name="password"
                                            id="password"
                                            InputProps={{className: classes.input}}
                                            value={values.password}
                                            variant="outlined"
                                            type="password"
                                  
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </Grid><br />
                                    <a href='../component/ForgetPassword.tsx' className={classes.for}>Forgot Password?</a>
                                    <Grid
                                        item
                                        lg={12}
                                        md={10}
                                        sm={10}
                                        xs={10}
                                        className={classes.submitButton}
                                    >
                                        <Button
                                            type="submit"
                                            variant="contained"
                                        
                                            disabled={isSubmitting}
                                            className={classes.btn}
                                        >
                                            Sign in
                                        </Button>
                                        {displayFormStatus && (
                                            <div className="formStatus">
                                                {formStatus.type === 'error' ? (
                                                    <p
                                                        className={
                                                            classes.errorMessage
                                                        }
                                                    >
                                                        {formStatus.message}
                                                    </p>
                                                ) : formStatus.type ===
                                                'success' ? (
                                                    <p
                                                        className={
                                                            classes.successMessage
                                                        }
                                                    >
                                                        {formStatus.message}
                                                    </p>
                                                ) : null}
                                            </div>
                                        )}
                                    </Grid>
                                    <span className={classes.acont}>Don't have an acount?<a href='../component/SignUp.tsx' className={classes.sign} >Sign Up</a></span>
                                </Grid>
                            </Form>
                            </div>
                        )
                    }}
                </Formik>
                </div>
      
        )
    }

export default Login;