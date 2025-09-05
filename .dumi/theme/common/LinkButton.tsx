import React from 'react';
import { Button } from 'gzj-ui';
import type { ButtonProps } from 'gzj-ui';
import Link from './Link';
import type { LinkProps } from './Link';

type LinkButtonProps = LinkProps &
  Readonly<React.PropsWithChildren<Pick<ButtonProps, 'type' | 'size'>>>;

const LinkButton: React.FC<LinkButtonProps> = (props) => <Link component={Button} {...props} />;

export default LinkButton;
