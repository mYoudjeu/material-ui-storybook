// Card.tsx
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

export interface CardProps {
  /**
   * Defines the variant of the card.
   * It accepts two values: 'regular' or 'ProfileCard'.
   */
  variant: 'regular' | 'ProfileCard';

  /**
   * Background color of the card.
   */
  backgroundColor?: string;

  /**
   * Size of the card.
   * Default value is 'medium'.
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Label or title for the card.
   */
  label: string;

  /**
   * Image URL for the card.
   */
  image?: string;

  /**
   * Title to be displayed in the header of the profile card variant.
   */
  headerTitle?: string;

  /**
   * Description text to be displayed in the profile card variant.
   */
  description?: string;

  /**
   * Array of URLs for logos to be displayed in the footer of the profile card variant.
   */
  footerLogos?: string[];
}


// Define a card design component for common card elements
const CardDesign: React.FC<{ label: string; imageUrl?: string }> = ({ label, imageUrl }) => (
  <React.Fragment>
    <CardContent>
      {imageUrl ? (
        <img src={imageUrl} alt="Card Image" style={{ maxWidth: '100%', height: 'auto' }} />
      ) : (
        <Typography variant="body2">No Image</Typography>
      )}
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        {label}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

const RegularCard: React.FC<CardProps> = ({ backgroundColor, label, size = 'medium', image }) => {
  const imageUrl = typeof image === 'string' ? image : image ? URL.createObjectURL(image) : undefined;


  // Define a function to get card width based on size
  const getWidth = (size: string) => {
    switch (size) {
      case 'small':
        return 200;
      case 'medium':
        return 300;
      case 'large':
        return 400;
      default:
        return 'auto';
    }
  };

  return (
    <Box sx={{ maxWidth: 500 }}>
      <Card variant="outlined" sx={{ backgroundColor, width: getWidth(size) }}>
        <CardDesign label={label} imageUrl={imageUrl} />
      </Card>
    </Box>
  );
};

const ProfileCardCard: React.FC<CardProps> = ({
  backgroundColor,
  label,
  size = 'medium', // Default size set here
  headerTitle,
  description,
  footerLogos,
}) => {
  const getWidth = (size: string) => {
    switch (size) {
      case 'small':
        return 200;
      case 'medium':
        return 300;
      case 'large':
        return 400;
      default:
        return 'auto';
    }
  };
  return (
    <Card sx={{ width: getWidth(size) }}> {/* Apply width based on size */}
      <CardContent sx={{ backgroundColor }}>
        <Typography variant="h5" sx={{ display: 'flex', justifyContent: 'center' }}>{headerTitle}</Typography>
        <Avatar sx={{ marginLeft: '45%' }} src={footerLogos?.[0]} />
      </CardContent>
      <CardContent>
        <Typography variant="body2" justifyContent="center" margin="0px 20px 0px 20px" >{description}</Typography>
        <Grid container justifyContent="space-evenly" sx={{ marginTop: '30px' }}>
          {footerLogos?.slice(1).map((logo, index) => (
            <Grid key={index} item>
              <img src={logo} alt={`logo-${index}`} style={{ width: '50px', height: '50px' }} />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}

const CardNew: React.FC<CardProps> = ({
  variant,
  size,
  backgroundColor,
  label,
  image,
  headerTitle,
  description,
  footerLogos,
}) => {
  return (
    <Box sx={{ maxWidth: 500 }}>
      {variant === 'regular' && (
        <RegularCard variant={variant} backgroundColor={backgroundColor} label={label} size={size} image={image} />
      )}
      {variant === 'ProfileCard' && (
        <ProfileCardCard
          variant={variant}
          backgroundColor={backgroundColor}
          label={label}
          headerTitle={headerTitle}
          description={description}
          footerLogos={footerLogos}
          size={size}
        />
      )}
    </Box>
  );
};

export default CardNew;
