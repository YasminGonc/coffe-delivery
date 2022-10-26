# coffee-delivery-plus-croct

## About

Coffee Delivery is a website focused on selling coffee. This application was developed for the challenge of the Customer Service Engineer job at Croct.
<br>
The project has 3 pages: home to list the products, shopping cart, and completed order. Furthermore, the app gains some personalization features with Croct’s React lib.

## Applied technologies

- Built with [Vite](https://vitejs.dev/);
- [Styled-components](https://styled-components.com/) for styles;
- [React Router](https://reactrouter.com/en/main) to create the router between the pages;
- [Zod](https://github.com/colinhacks/zod) to form validation;
- API [Via CEP](https://viacep.com.br/) to bring informations related to user's address;
- [Croct Plug React](https://github.com/croct-tech/plug-react) to customize some itens.

## Where Croct was applied?

1. Select an application theme based on the commemorative date

Based on alternate themes idea, I used the Croct personalization features to alternate between the themes based on the commemorative date. In this case, Halloween was chosen, so on October 31st, the default application theme will change to Halloween ones.
<br>
For this action to be possible, on App.tsx file the `Personalization` component was used with the validation expression: “today’s day is 31 and today’s month is 10”. This promise returns a boolean value, if it is true the Halloween theme is applied. 
The same idea can be adapted to other commemorative dates such as Christmas and Mother’s Day.
<br>
It is worth highlighting that the same validation expression was used in the Header component to replace the logo image.
<br>
The fallback attribute was used with the negative Boolean value, to prevent application malfunction.
<br>
App component code

```typescript
<Suspense fallback="Customizing theme">
  <Personalization expression="today's day is 31 and today's month is 10" fallback={false}>
    {(isHalloween: boolean) =>
      <ThemeProvider theme={isHalloween ? halloweenTheme : defaultTheme}>
         <CoffeeOrderProvider>
            <DeliveryProvider>
                <Router />
            </DeliveryProvider>
          </CoffeeOrderProvider>
          <GlobalStyle />
      </ThemeProvider>}
  </Personalization>
</Suspense>
```
2. Customized slogans based on user's location

Some banner slogans on the Homepage were personalized based on the user’s location. The alternation between the slogans was possible to be done with the `Personalization` component with the expression “location’s city”, which returns a string with the city’s name.
<br>
Something similar was done with the Header component to show an element with the user’s location, as shown in the picture below.

<img src="GHAssets/header-location.png" width="600">

The code logic to implement this item on the screen was a little different from the one used in the banner. The location variable was defined by the hook `useEvaluation`. The variable type is based on the expression response, in this case can be a string or null if the location is not available. The location icon is just shown on the screen if the location is a string type.
<br>
Header component code

```typescript
const location = useEvaluation<string | null>("location's city");

(...)

{location &&
    <LocationContainer>
        <MapIcon weight='fill' />
        <span>{location}</span>
    </LocationContainer>
}
```

3. Coffee suggestions based on the weekday if the cart is empty

If no items are selected, on the cart page some coffee suggestions are going to be shown based on the weekday. To do this kind of personalization I chose to create a React component `EmptyCartPersonalization` and use the `usePersinalization` hook. The expression used to evaluate was “today’s weekday” and the type return is a string, in this specific case numbers between 0 and 6.
<br>
I call attention that in this case, a `Slot` component has more advantages, letting the code clean. The `Slot` component was not used because is necessary an id configuration for this usage. The app ID received had a configuration to show different messages based on the user’s persona, not suitable for use in this project.

4. Discount coupon alert

At the checkout, the application’s user can check if a discount is available. This kind of evaluation was done with the useCroct hook and the useCallback hook.

## Video application details (in Portuguese)

https://clipchamp.com/watch/c1S9uCL3e4W

## Layout

<img src="GHAssets/home.png" width="600">
<img src="GHAssets/cart-blank.png" width="600">
<img src="GHAssets/cart-fill.png" width="600">
<img src="GHAssets/alert.png" width="600">
<img src="GHAssets/success.png" width="600">
<img src="GHAssets/halloween-theme.png" width="600">

## Run the application

Type `npm run dev` to run the application on localhost

## Additional infos

- Author: [Yasmin](https://www.linkedin.com/in/yasmin-goncalves/)
- Challenge by Croct.