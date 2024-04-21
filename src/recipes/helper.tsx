import { ComponentProps, JSX, createContext, useContext } from 'solid-js';
import { Dynamic } from 'solid-js/web';

type GenericProps = Record<string, unknown>;
type StyleRecipe = {
  (props?: GenericProps): Record<string, string>;
  splitVariantProps: (props: GenericProps) => any;
};
type StyleSlot<R extends StyleRecipe> = keyof ReturnType<R>;
type StyleSlotRecipe<R extends StyleRecipe> = Record<StyleSlot<R>, string>;
type StyleVariantProps<R extends StyleRecipe> = Parameters<R>[0];
type CombineProps<T, U> = Omit<T, keyof U> & U;

const cx = (...args: (string | undefined)[]) => args.filter(Boolean).join(' ');

export interface ComponentVariants<
  T extends JSX.Element,
  R extends StyleRecipe,
> {
  (props: CombineProps<ComponentProps<T>, StyleVariantProps<R>>): JSX.Element;
}

export const createStyleContext = <R extends StyleRecipe>(recipe: R) => {
  const StyleContext = createContext<StyleSlotRecipe<R> | null>(null);

  const withProvider = <T extends JSX.Element>(
    Component: T,
    slot?: StyleSlot<R>
  ): ComponentVariants<T, R> => {
    const StyledComponent = (props: ComponentProps<T>) => {
      const [variantProps, otherProps] = recipe.splitVariantProps(props);
      const slotStyles = recipe(variantProps) as StyleSlotRecipe<R>;
      return (
        <StyleContext.Provider value={slotStyles}>
          <Dynamic
            class={cx(slotStyles[slot ?? ''], otherProps.className)}
            component={Component}
            {...otherProps}
          ></Dynamic>
        </StyleContext.Provider>
      );
    };
    return StyledComponent as unknown as ComponentVariants<T, R>;
  };

  const withContext = <T extends JSX.Element>(
    Component: T,
    slot?: StyleSlot<R>
  ): T => {
    if (!slot) return Component;
    const StyledComponent = (props: ComponentProps<T>) => {
      const slotStyles = useContext(StyleContext);

      return (
        <Dynamic
          className={cx(slotStyles?.[slot ?? ''], props.className)}
          component={Component}
          {...props}
        ></Dynamic>
      );
    };
    return StyledComponent as unknown as T;
  };

  return {
    withProvider,
    withContext,
  };
};
