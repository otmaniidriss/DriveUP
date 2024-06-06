import { Container, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Hero = () => {
  return (
    <div
      className='py-5'
      style={{
        color: '#ffffff',
        backgroundImage: "url('https://img.vehicleservicepros.com/files/base/cygnus/vspc/image/2022/05/16x9/ADAS_Systems.6272d3e46e6fa.png?auto=format,compress&fit=fill&fill=blur&w=1200&h=630')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container className='d-flex justify-content-center'  >
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-dark w-75'  >
          <h1 className='text-center mb-4' style={{ color: 'white' }} >DriveUp</h1>
          <p className='text-center mb-4' style={{fontSize: 'default', color: 'white' }} >
          DriveUp enhances your driving experience by providing real-time insights and alerts to keep you safe and focused on the road.
           Enjoy a smoother, smarter, and safer journey with DriveUp, your ultimate driving companion.
          </p>
          <div className='d-flex'>
            <LinkContainer to='/login'>
            <Button variant='primary' className='me-3'>
              Sign In
            </Button>
            </LinkContainer>
            <LinkContainer to='/register'>
            <Button variant='secondary' >
              Sign Up
            </Button>
            </LinkContainer>
          </div>
          
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
