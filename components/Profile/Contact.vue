<template>
  <section class="contact" id="contact">
    <h1 class="heading">contact <span> me </span></h1>

    <div class="row">
      <div class="image">
        <img class="tilt" src="images/contact-img.svg" alt="" />
      </div>

      <form action="">
        <div class="inputBox">
          <input type="text" placeholder="name" />
          <input type="email" placeholder="email" />
        </div>

        <input type="text" placeholder="subject" class="box" />

        <textarea
          placeholder="message"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>

        <input type="submit" class="btn" value="send message" />
      </form>
    </div>
  </section>
</template>

<script>
export default {};
</script>