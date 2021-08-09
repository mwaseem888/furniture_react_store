import {
    Container,
    Grid,
    TextField,
    TextareaAutosize,
    Button
} from "@material-ui/core";
import PhoneIcon from '@material-ui/icons/Phone';
import Card from '@material-ui/core/Card';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import Header from '../Navbar/header';

export default function Contact() {
    return (
        <div>
        <Header/>
            <Container>
                <h1 style={{justifyContent:"center", textAlign:"center", padding: '30px 0px 30px 0px'}}>Contact Us</h1>
                <Grid container spacing={5}>
                    <Grid item lg={12}>
                         <Card>
                        <ul style={{listStyleType:"none", fontSize:"15.05px", marginTop:"20px"}}>
                        <h2 style={{textAlign:"center"}}>Islamabad Showroom</h2>
                            <li>Gulshan steel St# 3, Gulistan Colony, Ghazi Road, Lahore - Pakistan</li>
                            <li>Haji Shafi Muhammad : 0300 4195264</li>
                            <li>Mubeen Shafi : 0333 4123009</li>
                            <li>Fax: +92 423 1234567</li>
                            <li>Email: info@gulshansteel.com</li>
                            <li>URL : www.gulshansteel.com</li>
                            </ul>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13624.100897031482!2d74.3637224!3d31.385868!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x747e4dc3dd6e83d9!2sGulshan%20Steel%20Factory!5e0!3m2!1sen!2s!4v1621346799194!5m2!1sen!2s" style={{ height: '300px', width: '100%' }}></iframe> 
                        </Card>
                     </Grid>
                    </Grid>



                     <Grid container spacing={5}>
                    <Grid item lg={12}>
                         <Card>
                        <ul style={{listStyleType:"none", fontSize:"15.05px", marginTop:"20px"}}>
                        <h2 style={{textAlign:"center"}}>Islamabad Showroom</h2>
                            <li>Gulshan steel St# 3, Gulistan Colony, Ghazi Road, Lahore - Pakistan</li>
                            <li>Haji Shafi Muhammad : 0300 4195264</li>
                            <li>Mubeen Shafi : 0333 4123009</li>
                            <li>Fax: +92 423 1234567</li>
                            <li>Email: info@gulshansteel.com</li>
                            <li>URL : www.gulshansteel.com</li>
                            </ul>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13624.100897031482!2d74.3637224!3d31.385868!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x747e4dc3dd6e83d9!2sGulshan%20Steel%20Factory!5e0!3m2!1sen!2s!4v1621346799194!5m2!1sen!2s" style={{ height: '300px', width: '100%' }}></iframe> 
                        </Card>
                     </Grid>
                    </Grid>





                     <Grid container spacing={5}>
                    <Grid item lg={12}>
                         <Card>
                        <ul style={{listStyleType:"none", fontSize:"15.05px", marginTop:"20px"}}>
                        <h2 style={{textAlign:"center"}}>Islamabad Showroom</h2>
                            <li>Gulshan steel St# 3, Gulistan Colony, Ghazi Road, Lahore - Pakistan</li>
                            <li>Haji Shafi Muhammad : 0300 4195264</li>
                            <li>Mubeen Shafi : 0333 4123009</li>
                            <li>Fax: +92 423 1234567</li>
                            <li>Email: info@gulshansteel.com</li>
                            <li>URL : www.gulshansteel.com</li>
                            </ul>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13624.100897031482!2d74.3637224!3d31.385868!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x747e4dc3dd6e83d9!2sGulshan%20Steel%20Factory!5e0!3m2!1sen!2s!4v1621346799194!5m2!1sen!2s" style={{ height: '300px', width: '100%' }}></iframe> 
                        </Card>
                     </Grid>
                    </Grid>




                     <Grid container spacing={5}>
                    <Grid item lg={12}>
                         <Card>
                        <ul style={{listStyleType:"none", fontSize:"15.05px", marginTop:"20px"}}>
                        <h2 style={{textAlign:"center"}}>Islamabad Showroom</h2>
                            <li>Gulshan steel St# 3, Gulistan Colony, Ghazi Road, Lahore - Pakistan</li>
                            <li>Haji Shafi Muhammad : 0300 4195264</li>
                            <li>Mubeen Shafi : 0333 4123009</li>
                            <li>Fax: +92 423 1234567</li>
                            <li>Email: info@gulshansteel.com</li>
                            <li>URL : www.gulshansteel.com</li>
                            </ul>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13624.100897031482!2d74.3637224!3d31.385868!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x747e4dc3dd6e83d9!2sGulshan%20Steel%20Factory!5e0!3m2!1sen!2s!4v1621346799194!5m2!1sen!2s" style={{ height: '300px', width: '100%' }}></iframe> 
                        </Card>
                     </Grid>
                    </Grid>
                    
                
                
                
                    
                     
                
                
                
                
                
                <ContactForm />
            </Container>
        
        
        </div>
    )
}

let ContactForm = () => {
    return (
        <div>
            <Grid container spacing={1}>
                <Grid item lg={6} xs={12}><h4>First Name</h4></Grid>
                <Grid item lg={6} xs={12}><h4>Last Name</h4></Grid>
                <Grid item lg={6} xs={12}>
                    <TextField
                        style={{ width: '100%' }}
                        variant='outlined'
                        label='First Name'
                    >
                    </TextField>
                </Grid>

                <Grid item lg={6} xs={12}>
                    <TextField
                        style={{ width: '600px' }}
                        variant='outlined'
                        label='Last Name'
                    >
                    </TextField>
                </Grid>
                <Grid item lg={6} xs={12}><h4>Phone Number</h4></Grid>
                <Grid item lg={6} xs={12}><h4 style={{ marginLeft: '10px' }}>Email</h4></Grid>
                <Grid lg={6} xs={12}>
                    <TextField
                        style={{ width: '100%' }}
                        variant='outlined'
                        label='Phone Number'
                    >
                    </TextField>
                </Grid>

                <Grid lg={6} xs={12}>
                    <TextField
                        style={{ width: '600px', marginLeft: '8px' }}
                        variant='outlined'
                        label='Email'
                    >
                    </TextField>
                </Grid>
                <Grid item lg={12} xs={12}><h4>Write Your Message</h4></Grid>
                <Grid item lg={12} xs={12}>
                    <TextareaAutosize
                        style={{width: '100%', height: '200px'}}
                    >
                    </TextareaAutosize>
                </Grid>
                <Button variant='outlined' color='secondary' size='large' style={{ margin: '20px 0px 50px 0px' }}>Send Message</Button>
            </Grid>
        </div>
    )
}