import React from 'react';
import { useState } from 'react';
import styles from "./Form.module.css";

const Form = ({ user }) => {

    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");
    const [bio, setBio] = useState(user ? user.bio : "");
    const [role, setRole] = useState(user ? user.role : "");

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, bio, role);
        
        setName("");
        setEmail("");
        setBio("");
        setRole("");
    }

    return (
        <div>
            <h1 className={styles.title}>Formulario Label { name } { !(name === "") && !(email === "") ? " - " : "" } { email }</h1>
            <form className={styles} onSubmit={ handleSubmit }>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <label className={styles.label}>
                        Nome:
                        <input 
                            onChange={handleName} 
                            className={styles} 
                            type="text" 
                            id='nome' 
                            placeholder='Digite o seu nome...' 
                            value={name} 
                        />
                    </label>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "10px" }}>
                    <label className={styles.label}>
                        Email:
                        <input 
                            className={styles} 
                            type="text" 
                            id='email' 
                            placeholder='Digite o seu email...' 
                            onChange={(e) => {setEmail(e.target.value)}}  
                            value={email} 
                        />
                    </label>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "10px" }}>
                    <label id="bio" className={styles.bio}>
                        Bio:
                        <textarea 
                            id="bioTextArea" 
                            className={styles.bioTextArea}
                            placeholder="Text areaaaa"
                            onChange={(e) => (setBio(e.target.value))}
                            value={bio}
                        ></textarea>
                    </label>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "10px" }}>
                    <label id="bio" className={styles.bio}>
                        Select:
                        <select name="role" onChange={(e) => (setRole(e.target.value))} value={role}>
                            <option>Selecione</option>
                            <option value="usuario">Usuario</option>
                            <option value="editor">Editor</option>
                        </select>
                        
                    </label>
                </div>
                <div>
                    <button className={styles.button} type="submit">Salvar</button>
                </div>
            </form>
        </div>
    )
}

export default Form;