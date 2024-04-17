import { cva } from '../../../styled-system/css';
import { styled } from '../../../styled-system/jsx';
const window = cva({
  base: {
    backgroundColor: 'rgb(0, 0, 168)',
    padding: 1,
    display: 'inline-block',
    position: 'relative',
    boxShadow: '10px 10px black',
    color: 'white',
  },
  variants: {
    backgroundColor: {
      GreenWhite: {
        backgroundImage: 'url("./images/bg-green-white.png")',
        backgroundRepeat: 'repeat',
      },
      GreenBlack: {
        backgroundImage: 'url("./images/bg-green-black.png")',
        backgroundRepeat: 'repeat',
      },
      CyanWhite: {
        backgroundImage: 'url("./images/bg-cyan-white.png")',
        backgroundRepeat: 'repeat',
      },
      CyanBlack: {
        backgroundImage: 'url("./images/bg-cyan-black.png")',
        backgroundRepeat: 'repeat',
      },
      RedWhite: {
        backgroundImage: 'url("./images/bg-red-white.png")',
        backgroundRepeat: 'repeat',
      },
      RedBlack: {
        backgroundImage: 'url("./images/bg-red-black.png")',
        backgroundRepeat: 'repeat',
      },
      PurpleWhite: {
        backgroundImage: 'url("./images/bg-purple-white.png")',
        backgroundRepeat: 'repeat',
      },
      PurpleBlack: {
        backgroundImage: 'url("./images/bg-purple-black.png")',
        backgroundRepeat: 'repeat',
      },
      YellowWhite: {
        backgroundImage: 'url("./images/bg-yellow-black.png")',
        backgroundRepeat: 'repeat',
      },
      OrangeWhite: {
        backgroundImage: 'url("./images/bg-orange-white.png")',
        backgroundRepeat: 'repeat',
      },
      OrangeBlack: {
        backgroundImage: 'url("./images/bg-orange-black.png")',
        backgroundRepeat: 'repeat',
      },
    },
  },
});

export type WindowVariant = RecipeVariantProps<typeof window>;

export const TuiWindow = styled('div', window);
