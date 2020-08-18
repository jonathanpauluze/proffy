import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
    backgroundColor: '#8257e5',
  },

  banner: {
    width: '100%',
    resizeMode: 'contain',
  },

  title: {
    marginTop: 80,
    fontFamily: 'Poppins_400Regular',
    fontSize: 20,
    lineHeight: 30,
    color: '#fff'
  },

  titleBold: {
    fontFamily: 'Poppins_600SemiBold',
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },

  button: {
    width: '48%',
    height: 150,
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between'
  },

  buttonPrimary: {
    backgroundColor: '#9871f5'
  },

  buttonSecondary: {
    backgroundColor: '#04d361'
  },

  buttonText: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 20,
    color: '#fff'
  },

  totalConnections: {
    maxWidth: 140,
    marginTop: 40,
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#d4c2ff'
  }
});

export default styles;
