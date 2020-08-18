import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e6e6f0',
    borderRadius: 8,
    backgroundColor: '#fff',
    overflow: 'hidden'
  },

  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#eee'
  },

  profileInfo: {
    marginLeft: 16
  },

  name: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 20,
    color: '#32264d'
  },

  subject: {
    marginTop: 4,
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#6a6180'
  },

  bio: {
    marginHorizontal: 24,
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 24,
    color: '#6a6180'
  },

  footer: {
    alignItems: 'center',
    marginTop: 24,
    padding: 24,
    backgroundColor: '#fafafc'
  },

  price: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#6a6180'
  },

  priceValue: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    color: '#8257e5'
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 16
  },

  favoriteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 56,
    height: 56,
    marginRight: 8,
    borderRadius: 8,
    backgroundColor: '#8257e5'
  },

  favorited: {
    backgroundColor: '#e33d3d'
  },

  contactButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginRight: 8,
    borderRadius: 8,
    backgroundColor: '#04d361'
  },

  contactButtonText: {
    marginLeft: 16,
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    color: '#fff'
  }
});

export default styles;
