import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const StyledSkeleton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <ShimmerPlaceholder style={styles.avatar} />
      </View>
      <View style={styles.infoContainer}>
        <ShimmerPlaceholder style={styles.info} />
        <ShimmerPlaceholder style={styles.info} />
        <ShimmerPlaceholder style={styles.info} />
        <ShimmerPlaceholder style={styles.info} />
        <ShimmerPlaceholder style={styles.info} />
      </View>
    </View>
  );
};

const SkeletonList = () => {
  const numberOfSkeletons = 5;

  const skeletonComponents = Array.from(
    {length: numberOfSkeletons},
    (v, index) => <StyledSkeleton key={index} />,
  );

  return <View style={styles.heightDefine}>{skeletonComponents}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  heightDefine: {
    height: '15%',
  },
  avatarContainer: {
    borderRadius: 50,
    overflow: 'hidden',
  },
  avatar: {
    width: 72,
    height: 72,
    aspectRatio: 1,
    borderRadius: 50,
  },
  infoContainer: {
    marginLeft: 16,
    flex: 1,
  },
  info: {
    width: '85%',
    height: 16,
    marginBottom: 8,
  },
});

export {SkeletonList};
