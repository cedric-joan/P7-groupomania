<script>
export default{
    name:"AvatarList"
} 
</script>

<template>

<div class="sticky-top d-flex flex-column align-items-stretch flex-shrink-0 bg-white " >
    
    <div class="list-group list-group-flush border-bottom scrollarea">
      <a href="#" class="list-group-item list-group-item-action active py-3 lh-sm" aria-current="true">
        <div class="d-flex w-100 align-items-center justify-content-between">
          <strong class="mb-1">Communautés Populaires </strong>
        </div>
      </a>
      <a href="#" class="list-group-item list-group-item-action py-3 lh-sm border">
        <div class="d-flex w-100 align-items-center justify-content-between">
          <small class="mb-1">VOYAGE</small>
          <small class="text-muted">🌎</small>
        </div>
      </a>
      <a href="#" class="list-group-item list-group-item-action py-3 lh-sm border">
        <div class="d-flex w-100 align-items-center justify-content-between">
          <small class="mb-1">YOGA & FITNESS</small>
          <small class="text-muted">🤸‍♀️</small>
        </div>
      </a>

      <a href="#" class="list-group-item list-group-item-action py-3 lh-sm border">
        <div class="d-flex w-100 align-items-center justify-content-between">
          <small class="mb-1">MODE</small>
          <small class="text-muted">👕</small>
        </div>
      </a>
      <a href="#" class="list-group-item list-group-item-action py-3 lh-sm border">
        <div class="d-flex w-100 align-items-center justify-content-between">
          <small class="mb-1">SPORT</small>
          <small class="text-muted">🏀</small>
        </div>
      </a>
      <a href="#" class="list-group-item list-group-item-action py-3 lh-sm border">
        <div class="d-flex w-100 align-items-center justify-content-between">
          <small class="mb-1">JEUX VIDEO</small>
          <small class="text-muted">🎮</small>
        </div>
      </a>
      <a href="#" class="list-group-item list-group-item-action py-3 lh-sm border">
        <div class="d-flex w-100 align-items-center justify-content-between">
          <small class="mb-1">VU A LA TV</small>
          <small class="text-muted">📺</small>
        </div>
      </a>
    </div>
  </div>
</template>


<style scoped>
.d-flex{
    width: 250px;
    top:6.5rem;

}
@media (max-width: 992px) {
  .d-flex{
    top:9.5rem;

}
  
}
</style>