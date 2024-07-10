import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import css from './UserBarPopover.module.css';
import { useEffect, useState } from 'react';
import Icon from '../../shared/components/Icon';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAvatar,
  selectEmail,
  selectName,
  selectUser,
  selectWaterDrink,
} from '../../redux/users/selectors';
import {
  updateUserProfile,
  uploadUserAvatar,
} from '../../redux/users/operations';

const UserSettingsSchema = Yup.object().shape({
  name: Yup.string().max(10, 'Name must be at most 10 characters!'),
  email: Yup.string()
    .required('Email is required!')
    .email('Must be a valid email!'),
  weight: Yup.number()
    .transform(value => (isNaN(value) ? 0 : value))
    .nullable()
    .min(0, 'Weight must be a positive number!'),
  activeTimeSports: Yup.number()
    .transform(value => (isNaN(value) ? 0 : value))
    .nullable()
    .min(0, 'Active time must be a positive number!'),
  waterDrink: Yup.number()
    .required('Water intake is required!')
    .typeError('The rate of water drink should be a number!')
    .min(0, 'Water intake must be a positive number!'),
  gender: Yup.string().oneOf(['woman', 'man'], 'Invalid gender selection!'),
  avatarURL: Yup.mixed(),
});

const API_URL = 'API_URL';

const UserSettingsForm = ({ closeModal, closePopover }) => {
  const dispatch = useDispatch();
  const userDataAvatar = useSelector(selectAvatar);
  const userDataWaterDrink = useSelector(selectWaterDrink);
  const userDataName = useSelector(selectName);
  const userDataWeight = useSelector(state => selectUser(state).weight);
  const userDataTimeSports = useSelector(
    state => selectUser(state).activeTimeSports
  );
  const userDataGender = useSelector(state => selectUser(state).gender);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [savedAvatarURL, setSavedAvatarURL] = useState(userDataAvatar);
  const [avatarFile, setAvatarFile] = useState(null);
  const userDataEmail = useSelector(selectEmail);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(UserSettingsSchema),
    defaultValues: {
      name: userDataName,
      email: userDataEmail,
      weight: userDataWeight,
      activeTimeSports: userDataTimeSports,
      waterDrink: '',
      gender: userDataGender,
      avatarURL: userDataAvatar,
    },
  });
  const weight = watch('weight');
  const activeTime = watch('activeTimeSports');
  const gender = watch('gender');

  useEffect(() => {
    if (weight && activeTime && gender) {
      let waterDrink = 0;
      if (gender === 'woman') {
        waterDrink = Math.max(weight * 0.03 + activeTime * 0.4, 0);
      } else if (gender === 'man') {
        waterDrink = Math.max(weight * 0.04 + activeTime * 0.6, 0);
      }
      setValue('waterDrink', waterDrink.toFixed(1));
    }
  }, [weight, activeTime, gender, setValue]);

  const handleAvatarChange = e => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setAvatarPreview(preview);
      setValue('avatarURL', file);
      setAvatarFile(file);
      const formData = new FormData();
      formData.append('avatar', file);
      setSavedAvatarURL(formData);
    }
  };

  const onSubmit1 = async values => {
    const updatedData = {
      name: values.name,
      email: values.email,
      weight: values.weight,
      activeTimeSports: values.activeTimeSports,
      waterDrink: values.waterDrink,
      gender: values.gender,
    };

    await dispatch(updateUserProfile(updatedData));

    if (avatarFile) {
      await dispatch(uploadUserAvatar(savedAvatarURL));
    }

    closeModal();
    closePopover();
  };
};
