import { useAuth } from '@clerk/clerk-expo';
import { Link } from 'expo-router';
import { Button, Text, View } from 'react-native';

const profile = () => {
  const { signOut, isSignedIn } = useAuth();
  return (
    <View>
      {isSignedIn ? (
        <Button
          title="Log out"
          onPress={() => {
            signOut();
          }}
        />
      ) : (
        <Link href="/(modals)/login">Log in</Link>
      )}
    </View>
  );
};
export default profile;
