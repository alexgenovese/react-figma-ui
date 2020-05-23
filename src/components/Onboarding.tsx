import React, { HTMLProps } from 'react';

import { Icon, Props as IconProps } from './Icon';

interface Props extends Readonly<HTMLProps<HTMLDivElement>> {
  readonly containerProps?: Readonly<HTMLProps<HTMLDivElement>>;
  readonly iconProps: IconProps;
}

export const Onboarding: React.FC<Props> = ({
  children,
  className = '',
  containerProps = {},
  iconProps,
  ...props
}) => {
  const {
    className: containerClassName = '',
    ...containerRest
  } = containerProps;

  return (
    <div {...containerRest} className={`onboarding-tip ${containerClassName}`}>
      <Icon {...iconProps} />

      <div {...props} className={`onboarding-tip__msg ${className}`}>
        {children}
      </div>
    </div>
  );
};
