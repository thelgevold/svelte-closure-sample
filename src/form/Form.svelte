
  <script>
    import { createForm } from "svelte-forms-lib";

    let valuesSelected = {title: "", name: "", email: ""};

    const { form, handleChange, handleSubmit } = createForm({
      initialValues: {
        title: "",
        name: "",
        email: ""
      },
      onSubmit: values => {
        valuesSelected = values;
      }
    });
  </script>

  <h1>Form</h1>
  <form on:submit={handleSubmit}>
    <label for="title">title</label>
    <select
      id="title"
      name="title"
      on:blur={handleChange}
      bind:value={$form.title}>
      <option></option>
      <option>Mr.</option>
      <option>Mrs.</option>
      <option>Mx.</option>
    </select>

    <label for="name">name</label>
    <input
      id="name"
      name="name"
      on:change={handleChange}
      bind:value={$form.name}
    />

    <label for="email">email</label>
    <input
      id="email"
      name="email"
      on:change={handleChange}
      bind:value={$form.email}
    />

    <button type="submit">Submit</button>

    <div style="margin-bottom:10px;margin-top:10px;">Selected Values:</div>
    <div>{valuesSelected.title}</div>
    <div>{valuesSelected.name}</div>
    <div>{valuesSelected.email}</div>
  </form>
