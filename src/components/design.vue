<template>
    <div class="home">

		<div class="home-title arg">
			<span class="for"> 
				<em> Welcome to '{{date}} </em>
			</span>
		</div>

        <div v-for="entry in entries[date]" :key="entry.id">
					<div class="col-lg-10">
						<div class="blog-back">

							<div class="blog-title" @click="$router.push({name: entry.id})">
								<img class="icone" :src= entry.src />
								{{entry.title}}
							</div>
						</div>

						<div class="desc-back desc-box d-flex">
							<p class="resto desc-text">{{entry.description}}</p> 
							<span class="subtitle ml-auto mt-5 mb-0">:{{entry.date}}</span>
						</div>

				</div>
        </div>

  </div>
</template>

<script>
import Blogs from '../statics/blogs.json'

export default {
    name:'intro',
		computed: {
			entries() {
				return Blogs
			},
			date() {
				return Object.keys(Blogs)[3];
			}
		},
}
</script>

<style scoped>
@import '../css/microe.css';

@media (max-width: 580px){
	.arg{
		font-size: 3rem; 
	}
	.blog-title {
		font-size: 5vw;
	}
	.blog-back { 
    padding: 15px 40px 60px;
    margin: 30px 0px;
	}
	.desc-back { 
		background-color: #1A2D4B; 
		border: 1px outset #C80815;
		padding: 15px 20px;
	}
}

@media (min-width: 590px) and (max-width: 815px){
	.blog-title {
		font-size: 4vw;
	}
}

</style>