import React, { useState } from 'react'
import {
    Grid,
    TextField,
    Button,
    makeStyles,
    createStyles,
    Theme,
} from '@material-ui/core'
import BackImage from '../image/Layer2.jpg'
import * as Yup from 'yup'
import { Formik, Form, FormikProps } from 'formik'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            [theme.breakpoints.down('xs')]:{
                width: '319px',
                height: '371px',
                padding: '40px 20px 39.6px 21px',
            },
           [theme.breakpoints.up('sm')]:{
               width: '501.7px',
               height: '416.5px',
               padding: '56.8px 46.7px 53.5px 44.6px',
           },
           [theme.breakpoints.up('lg')]:{
               width: '501.7px',
               height: '426.5px',
               marginleft: '-1280px',
               padding: '54.8px 46.7px 53.1px 44.6px'
           },
           [theme.breakpoints.up('xl')]:{
            width: '501.7px',
            height: '426.5px',
            marginleft: '-1280px',
            padding: '54.8px 46.7px 53.1px 44.6px'
        },
            borderRadius: '5px',
            border: 'solid 1px #e6e6e6',
            backgroundColor: '#ffffff',
            margin: '0 auto',
        },
   
        btn2:{
            [theme.breakpoints.down('xs')]:{
                 width: '269px',
                 height:'48px'
            },
           [theme.breakpoints.up('sm')]:{
               width: '175px',
               height: '50px'
           },
           [theme.breakpoints.up('lg')]:{
            width: '175px',
            height: '59px'
           },
           [theme.breakpoints.up('xl')]:{
            width: '175px',
            height: '59px'
           },
            backgroundColor: '#e1e6ea',

        },
        textField: {
            '& > *': {
                [theme.breakpoints.down('xs')]:{
                    width: '269px',
                    height: '53px'
               },
              [theme.breakpoints.up('sm')]:{
                  width:'480px'
              },
              [theme.breakpoints.up('lg')]:{
                  width: '410px'
              },
              [theme.breakpoints.up('xl')]:{
                width: '410px'
            },
            },
        },
        input:{
            [theme.breakpoints.down('xs')]:{
                width: '269px',
                height:'48px'
           },
           [theme.breakpoints.up('sm')]:{
              width: '410px',
              height: '48px' 
           },
           [theme.breakpoints.up('lg')]:{
               width:'410px',
               height: '48px'
           },
           [theme.breakpoints.up('xl')]:{
            width:'410px',
            height: '48px'
        },
           border: 'solid 1px #e6e6e6',

           backgroundColor: '#ffffff'
        },
        submitButton: {
            marginTop: '24px',
        },

        title: { textAlign: 'center' },
        successMessage: { color: 'green' },
        errorMessage: { color: 'red' },
        btn:{
            [theme.breakpoints.down('xs')]:{
                width: '269px',
                height:'48px'
           },
           [theme.breakpoints.up('sm')]:{
               width: '216px',
               height: '50px',
               marginLeft: '24px'
           },
           [theme.breakpoints.up('lg')]:{
               width: '216px',
               height: '59px',
               marginLeft: '24px'
           },
           [theme.breakpoints.up('xl')]:{
            width: '216px',
            height: '59px',
            marginLeft: '24px'
        },
            backgroundColor: '#3ab7d4'
        },
        email:{
            marginLeft:'15px'    ,
            [theme.breakpoints.down('xs')]:{
              fontSize: '15px', 
              marginLeft:'2px'
           },
            [theme.breakpoints.up('sm')]:{
                fontSize: '17px',
                marginLeft:'-25px'
            },
            [theme.breakpoints.up('lg')]:{
                fontSize:'16px'
            },
            [theme.breakpoints.up('xl')]:{
                fontSize:'16px'
            },
            marginRight:'257px',
            fontFamily: 'Raleway',
               
            fontWeight: 'bold',    
            fontStretch: 'normal', 
            fontStyle: 'normal',
            lineHeight: '2.33',
            letterSpacing: '0.23px',
            textAlign: 'left',  
            color: '#474646',
        },
        text:{
            [theme.breakpoints.down('xs')]:{
                marginLeft:'71px',
                 fontSize: '20px', 
           },
           [theme.breakpoints.up('sm')]:{
               fontSize: '26px',
               marginLeft:'135px',
           },
           [theme.breakpoints.up('lg')]:{
               fontsize:'28px',
               marinLeft:'127px'
           },
           [theme.breakpoints.up('xl')]:{
               fontsize:'30px',
               marginLeft:'117.8px'
           },
           
            fontFamily: 'Raleway',
              
            fontWeight: 'bold',    
            fontStretch: 'normal', 
            fontStyle: 'normal',
            lineHeight: '2.33',
            letterSpacing: '0.23px',
            textAlign: 'left',  
            color: '#474646',
        },
        txt: {
            [theme.breakpoints.down('xs')]:{
                fontSize: '15px',  

           },
           [theme.breakpoints.up('sm')]:{
             fontSize: '15px',
             marginLeft: '93px',
           },
           [theme.breakpoints.up('lg')]:{
               fontSize:'16px',
               marginLeft:'103px'
           },
           [theme.breakpoints.up('xl')]:{
               fontSize: '18px',
               marginLeft: '83.8px'
           },
            marginBottom: '5px',
            fontFamily: 'Raleway',
              
            fontWeight: 'bold',    
            fontStretch: 'normal', 
            fontStyle: 'normal',
            lineHeight: '2.33',
            letterSpacing: '0.23px',
            textAlign: 'left',  
            color: '#474646',

        },
        back:{
             [theme.breakpoints.down('xs')]:
            {
            width: '375px',

            height: '812px',
            padding:'221px 28px 220px;',

        },
        [theme.breakpoints.up('sm')]:{
            width: '768px',
            height:'1024px',
            padding:'299px 133.3px 308.5px 133px'
        },
        [theme.breakpoints.up('md')]:{
            width: '960px',
            height:'1024px',
            padding:'299px 133.3px 308.5px 133px'
        },
        [theme.breakpoints.up('lg')]:{
            width: '1280px',
            height: '800px',
            padding:'187px 389.3px 186.5px 0',
        },
        [theme.breakpoints.up('xl')]:{
            width:'1080px',
            height: '1080px',
            padding: '320.9px 709.2px 166px'
        }
    }
    })
)
interface ForgetForm {
 
    email: string
  
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
        message: 'reset password successfull',
        type: 'success',
    },
    duplicate: {
        message: 'the email you entered unknown',
        type: 'error',
    },
    error: {
        message: 'Something went wrong. Please try again.',
        type: 'error',
    },
}
function ForgetPass(){
    const classes = useStyles()
    const [displayFormStatus, setDisplayFormStatus] = useState(false)
    const [formStatus, setFormStatus] = useState<IFormStatus>({
        message: '',
        type: '',
    })

    const resetPass = async (data: ForgetForm , resetForm: Function) => {
        try {
            // API call integration will be here. Handle success / error response accordingly.
            if (data) {
                setFormStatus(formStatusProps.success)
                resetForm({})
            }
        } catch (error) {
            const response = error.response
            if (
                response.data === 'invalid email' &&
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
    return(
        <div style={{backgroundImage: `url(${BackImage})`, objectFit: `contain`,

        opacity: `0.7`}} className={classes.back}>
            <Formik
               initialValues={{
               
                email: '',
             
            }}
            onSubmit={(values: ForgetForm, actions) => {
                resetPass(values, actions.resetForm)
                setTimeout(() => {
                    actions.setSubmitting(false)
                }, 500)
            }}
         
            validationSchema={Yup.object().shape({
           
                email: Yup.string()
                    .email()
                    .required('Enter valid email-id'),
         
            })}

            
            >
              {(props: FormikProps<ForgetForm>) => {
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
                            <h1 className={classes.text}>Forgot Password?</h1>
                            <span className={classes.txt}> We'll send you an email with a reset link</span>
                            <Form>
                            
                                <Grid
                                    container
                                    justify="space-around"
                                    direction="row"
                                >
                                    <span className={classes.email}>Email ID</span><br />
                                    <Grid
                                        item
                                        xl={11}
                                        lg={11}
                                        md={11}
                                        sm={11}
                                        xs={11}
                                        className={classes.textField}
                                    >
                                        <TextField
                                            name="Email"
                                            id="email"
                                            InputProps={{className: classes.input}}
                                            value={values.email}
                                            variant="outlined"
                                            type="email"
                                            helperText={
                                                errors.email && touched.email
                                                    ? errors.email
                                                    : 'Enter your email.'
                                            }
                                            error={
                                                errors.email && touched.email
                                                    ? true
                                                    : false
                                            }
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        xl={11}
                                        lg={6}
                                        md={6}
                                        sm={6}
                                        xs={11}
                                        className={classes.submitButton}
                                    >
                                        <Button
                                            type="submit"
                                            variant="contained"
                                        
                                            disabled={isSubmitting}
                                            className={classes.btn}
                                        >
                                          Reset Password
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
                                   
                                    <Grid
                                        item
                                        xl={11}
                                        lg={6}
                                        md={6}
                                        sm={6}
                                        xs={11}
                                        className={classes.submitButton}
                                    >
                                        <Button
                                            type="submit"
                                            variant="contained"
                                        
                                            disabled={isSubmitting}
                                            className={classes.btn2}
                                        >
                                           Cancel
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
                                   
                                </Grid>
                            </Form>
                            </div>
                        )
                    }}

            </Formik>
           
        </div>
    )


}
export default ForgetPass;
