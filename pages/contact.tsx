import React, { useState } from 'react';
import ParticlesComponent from '../components/Particle';
import TextField from '../components/common/TextField';
import getConfig from 'next/config';
import Button from '../components/common/Button';

const { publicRuntimeConfig } = getConfig();
const appConfig = publicRuntimeConfig.appConfig;

function ContactUs() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: ""
  });
  const {
    form: {
      constants: {
        nameFieldLabel,
        nameFieldPlaceholder,
        messageFieldLabel,
        messageFieldPlaceholder,
        emailFieldLabel,
        emailFieldPlaceholder,
      }
    }
  } = appConfig?.pages?.contactUs;

  const onFormValuesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }
  const handleFormSubmit = () => {
    
  }
  return (
    <div style={{ display: "relative" }}>
      <div style={{ display: "absolute" }}>
        <ParticlesComponent />
      </div>
      <TextField
        label={nameFieldLabel}
        name="name"
        placeholder={nameFieldPlaceholder}
        onChangeCallback={onFormValuesChange}
        value={formData?.name}
      />
      <TextField
        label={emailFieldLabel}
        name="email"
        placeholder={emailFieldPlaceholder}
        onChangeCallback={onFormValuesChange}
        value={formData?.email}
      />
      <TextField
        label={messageFieldLabel}
        name="message"
        placeholder={messageFieldPlaceholder}
        onChangeCallback={onFormValuesChange}
        value={formData?.message}
        multiline={true}
      />
      <Button label='Send' onClickCallback={handleFormSubmit} />
    </div>
  )
}

export default ContactUs;