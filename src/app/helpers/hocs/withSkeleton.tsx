import { Skeleton } from '@/app/components/Skeleton/Skeleton';

function withSkeleton(Component, type, count) {
  return function WithSkeleton(props) {
    const { isLoading, ...restProps } = props;
    if (isLoading) {
      return <Skeleton type={type} count={count} />;
    }

    return <Component {...restProps} />;
  };
}

export { withSkeleton };

// import React from 'react';
// import { Skeleton } from '@/app/components/Skeleton/Skeleton';

// type ComponentType<Props> = React.ComponentType<Props>;

// interface WithSkeletonProps {
//   isLoading: boolean;
// }

// function withSkeleton<Props>(
//   Component: ComponentType<Props>,
//   type: string,
//   count: number
// ): React.FC<Props & WithSkeletonProps> {
//   return function WithSkeleton(props: Props & WithSkeletonProps) {
//     const { isLoading, ...restProps } = props;
//     if (isLoading) {
//       return <Skeleton type={type} count={count} />;
//     }

//     return <Component {...(restProps as Props)} />;
//   };
// }

// export { withSkeleton };
