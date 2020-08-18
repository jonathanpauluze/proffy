import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f7',
  },

  teacherList: {
    marginTop: -40,
  },

  searchForm: {
    marginBottom: 24
  },

  label: {
    fontFamily: 'Poppins_400Regular',
    color: '#d4c2ff'
  },

  input: {
    justifyContent: 'center',
    height: 54,
    marginTop: 4,
    marginBottom: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#fff'
  },

  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  inputBlock: {
    width: '48%'
  },

  submitButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    borderRadius: 8,
    backgroundColor: '#04d361'
  },

  submitButtonText: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    color: '#fff'
  }
});

export default styles;
