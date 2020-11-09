<template>
    <div>
        <Breadcrumbs title="All Products" icon="arrow-left"/>

        <div class="container-fluid">
            <div class="row">
              <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                      <ul class="d-flex">
                        <li class="tabs-item active-tabs-item">Product Details</li>
                        <li class="tabs-item">Orders</li>
                        <li class="tabs-item">Location Management</li>
                      </ul>
                    </div>
                    <div class="card-body d-flex">
                      <div class="col-md-7 p-0">
                        <div class="left-banner">
                          <div class="form-group">
                            <label class="title">Title</label>
                            <input type="text" class="form-control" placeholder="BuddyPhones Cosmos" >
                          </div>
                          <div class="description-block">
                            <h2 class="title">Description</h2>
                            <template>
                              <vue-simplemde v-model="content" ref="markdownEditor" />
                            </template>
                          </div>
                          <div class="images-block m-t-15">
                            <h2 class="title m-b-15">Images</h2>
                            <div class="bordered d-flex">
                              <div class="img-block bordered d-flex m-r-15">
                                <img src="../../src/assets/images/img/1.png" width="100"/>
                              </div>
                              <div class="img-block bordered d-flex m-r-15">
                                <img src="../../src/assets/images/img/1.png" width="100"/>
                              </div>
                              <div class="img-block bordered d-flex">
                                <img src="../../src/assets/images/img/1.png" width="100"/>
                              </div>
                            </div>
                          </div>
                          <div class="variants-block m-t-15">
                            <h2 class="title m-b-15">Variants</h2>
                            <div class="bordered d-flex">
                              <div class="w-75">
                                <div class="variant d-flex m-b-20">
                                  <div class="img-block">
                                    <img src="../assets/images/img/1.png" width="50" />
                                  </div>
                                  <span>BUDDYPHONES DRAGON</span>
                                  <span>SKU - 000000</span>
                                  <span>50</span>
                                </div>
                                <div class="variant d-flex">
                                  <div class="img-block">
                                    <img src="../assets/images/img/1.png" width="50" />
                                  </div>
                                  <span>BUDDYPHONES DRAGON</span>
                                  <span>SKU - 000000</span>
                                  <span>50</span>
                                </div>
                              </div>
                              <div class="btn-add-variant">
                                <button class="btn p-0 text-blue">Add Variant</button>
                              </div>
                            </div>
                          </div>
                          <div class="landing-page-template m-t-15">
                            <h2 class="title m-b-15">Landing Page Template</h2>
                            <div class="bordered d-flex">
                              <div class="block bordered d-flex m-r-15 bg-img">
                                <label class="switch">
                                  <input :class="classes" type="checkbox" checked="true" :name="name" :disabled="disabled" v-model="value">
                                  <span><slot></slot></span>
                                </label>
                              </div>
                              <div class="block bordered d-flex">
                                <span class="badge badge-dark">Create Design</span>
                              </div>
                            </div>
                          </div>
                          <div class="package-design-block m-t-15">
                            <h2 class="title m-b-15">Package Design</h2>
                            <div class="bordered d-flex">
                              <div class="block bordered d-flex m-r-15">
                                <img src="../assets/images/img/1.png" width="110" class="m-b-10"/>
                                <span class="badge badge-dark">Order Packaging</span>
                                <div class="edit-icon">
                                  <span><i class="fa fa-edit"></i></span>
                                </div>
                              </div>
                              <div class="block bordered d-flex">
                                <img src="../assets/images/img/1.png" width="110" class="m-b-10"/>
                                <span class="badge badge-dark">Create Design</span>
                                <div class="edit-icon">
                                  <span><i class="fa fa-edit"></i></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>


                      <div class="col-md-5 p-r-0">
                        <div class="right-block">
                          <h2 class="title">
                            Organization
                          </h2>
                          <div class="bordered bg-gray">
                            <div class="mb-2">
                              <div class="col-form-label">Product Type</div>
                              <multiselect  v-model="produtcType" tag-placeholder="Add this as new tag" placeholder="Search or add a tag"
                                            label="name" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
                            </div>
                            <div class="mb-2 category-block">
                              <div class="col-form-label">Category</div>
                              <multiselect  v-model="organizationCategory" tag-placeholder="Add this as new tag" placeholder="Search or add a tag"
                                            label="name" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
                            </div>
                            <div class="form-group">
                              <label>Product SKU</label>
                              <input type="text" class="form-control" value="BUDDYPHONES COSMOS - UNICORN">
                            </div>
                            <div class="form-group">
                              <label>Price</label>
                              <input type="text" class="form-control" value="$99.99">
                            </div>
                            <div class="mb-2 subcategory-block">
                              <div class="col-form-label">Subcategory</div>
                              <multiselect  v-model="subCategory" tag-placeholder="Add this as new tag" placeholder="Search or add a tag"
                                            label="name" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
                            </div>
                            <div class="mb-2">
                              <div class="col-form-label">Manufactorer</div>
                              <multiselect  v-model="manufactorer" tag-placeholder="Add this as new tag" placeholder="Search or add a tag"
                                            label="name" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
                             </div>
                            <div class="mb-2">
                              <div class="col-form-label">Region</div>
                              <multiselect  v-model="organizationRegion" tag-placeholder="Add this as new tag" placeholder="Search or add a tag"
                                            label="name" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
                            </div>
                          </div>

                          <div class="m-t-20 assignment-block">
                            <h2 class="title">Assignment</h2>
                            <div class="bordered bg-gray">
                              <div class="form-group p-relative">
                                <label>Total Product Quantity</label>
                                <input type="text" class="form-control" value="4000">
                                <label class="switch">
                                  <input :class="classes" type="checkbox" checked="true" :name="name" :disabled="disabled" v-model="value">
                                  <span><slot></slot></span>
                                </label>
                              </div>
                              <div class="form-group d-flex flex-column">
                                <label>Product Location</label>
                                <div class="d-flex align-center">
                                  <select class="custom-select m-r-5">
                                    <option value="Amazon">Amazon</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                  </select>
                                  <input type="text" class="form-control input-value m-r-10" value="500">
                                  <button class="btn-pill btn btn-add-location">
                                    <i class="fa fa-plus"></i>
                                    Add Location
                                  </button>
                                </div>
                              </div>
                              <div class="form-group">
                                <label>Date of Activation</label>
                                <input type="date" class="form-control" value="1/2/2021">
                              </div>
                            </div>
                          </div>

                          <div class="deployment-block m-t-20">
                            <h2 class="title">Deployment</h2>
                            <div class="bordered bg-gray">
                              <div class="flex">
                                <img src="../assets/images/img/shopify.png" width="100" />
                                <label class="switch">
                                  <input :class="classes" type="checkbox" checked="true" :name="name" :disabled="disabled" v-model="value">
                                  <span><slot></slot></span>
                                </label>
                              </div>
                              <div class="m-t-20 flex">
                                <img src="../assets/images/img/amazon.png" width="85" />
                                <label class="switch">
                                  <input :class="classes" type="checkbox" checked="true" :name="name" :disabled="disabled" v-model="value">
                                  <span><slot></slot></span>
                                </label>
                              </div>
                              <div class="m-t-20 flex">
                                <img src="../assets/images/img/ebay.png" width="80" />
                                <label class="switch">
                                  <input :class="classes" type="checkbox" checked="true" :name="name" :disabled="disabled" v-model="value">
                                  <span><slot></slot></span>
                                </label>
                              </div>
                              <div class="m-t-20">
                                <a href="#">Connect Accounts</a>
                                <span></span>
                              </div>
                            </div>
                          </div>

                          <div class="btn-create m-t-15">
                            <button id="default-primary" type="button" class="btn btn-primary border">Create</button>
                          </div>

                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
        <!-- Container-fluid Ends-->
    </div>
</template>

<script>

import Multiselect from 'vue-multiselect'
import VueSimplemde from 'vue-simplemde'

export default {
  props: {
    disabled: Boolean,
    classes: String,
    checked: true,
    name: String
  },
  data() {
    return {
      content: 'BuddyPhones Cosmos are the world’s only headphones to combine active noise-cancelling technology, volume-limiting circuitry, and 3 listening settings in one premium safe audio product for kids. The foldable Cosmos has an 18-hour battery life, works without battery using the backup BuddyCable, can plug multiple listeners to one device, and comes with a hard case for storage.\n',
      value: null,
      produtcType: [
        { name: 'HEADHPHONES', code: '1' },
      ],
      organizationCategory: [
        { name: '3-10 YEARS OLD', code: '1' },
      ],
      subCategory: [
        { name: 'SUBCATEGORY', code: '1' },
      ],
      manufactorer: [
        { name: 'ONANDOFF', code: '1' },
      ],
      organizationRegion: [
        { name: 'AMAZON', code: '1' },
      ],
      options: [
        {code: 1, name: 'SECOND'},
        {code: 2, name: 'THIRD'},
        {code: 3, name: 'FOURTH'},
      ],

    }
  },
  components: {
    Multiselect,
    VueSimplemde
  },
  methods: {
    addTag (newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
      }
      this.options.push(tag)
      this.value.push(tag)
    },
  },
  beforeMount() {
    this.value = this.checked
  },
  mounted() {
    this.$emit('input', this.value)
  },
  watch: {
    value(val) {
      this.$emit('input', val)
    },
    checked (val) {
      this.value = val
    }
  }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style src="@toast-ui/editor/dist/toastui-editor.css"></style>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
@import '~simplemde/dist/simplemde.min.css';

  .top-title {
    font-size: 14px!important;
    padding-top: 14px;
    display: flex;
    align-items: center;
  }

  .page-header {
    padding-bottom: 11px!important;
  }

  .editor-statusbar {
    display: none;
  }
  .editor-toolbar {
    background-color: #FAFAFA;
    .fa-header {
      display: none!important;
    }
  }
  .CodeMirror {
    height: 300px!important;
    overflow-y: scroll;


    &::-webkit-scrollbar {
      width: 6px;
    }


  }
  .v-md-container {
    border: 1px solid;
  }
  .CodeMirror-sizer {
    min-width: auto;
  }

  .flex {
    display: flex;
    justify-content: space-between;
  }
  .align-center {
    align-items: center;
  }
  .assignment-block {
    label.switch {
      position: absolute;
      top: -6px;
      right: 4px;
    }
  }
  .page-body {
    padding: 0 5px !important;
  }
  .badge-dark {
    cursor: pointer;
  }
  label.switch {
  width: 100px;
  height: 30px;
  input[type="checkbox"] {
    display: none;
    &:checked {
      + span {
        &:before {
          background-color: #fff;
          border: 1px solid #ccc;
          width: 100px;
          padding: 0 16px;
        }
        &:after {
          background-color: #000B2C;
          transform: translate(85px, -50%);
        }
      }
    }
    + span {
      position: relative;
      display: inline-block;
      cursor: pointer;
      font-weight: 500;
      text-align: left;
      margin: 0px;
      padding: 0px 44px;
      &:before,
      &:after {
        content: '';
        font-size: 12px;
        cursor: pointer;
        position: absolute;
        margin: 0;
        outline: 0;
        top: 50%;
        transform: translate(0, -50%);
        transition: all 200ms ease-out;
      }
      &:before {
        content: 'Distribute';
        top: 0;
        left: 1px;
        width: 100px;
        padding-left: 27px;
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 8px;
      }
      &:after {
        left: 0;
        width: 20px;
        height: 20px;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .14), 0 2px 2px 0 rgba(0, 0, 0, .098), 0 1px 5px 0 rgba(0, 0, 0, .084);
      }
    }
    &:checked + span &:after {
      transform: translate(80%, -50%);
    }
  }
}
  .page-main-header {
    height: 70px!important;
  }
  .page-sidebar {
    margin-top: 70px!important;
  }
  .sidebar-submenu {
    margin-bottom: 25px;
    margin-left: 0!important;
    list-style: none!important;
    a {
      padding-left: 0!important;
    }
  }
  .sidebar-menu {
    padding: 47px 40px 0 25px!important;
    li {
      a {
        &:hover {
          color: blue!important;
        }
        i {
          margin-top: -2px!important;
        }
      }
    }
    .sidebar-header {
      padding-bottom: 25px!important;
      padding-top: 0!important;
      svg {
        width: 25px!important;
        height: 25px!important;
        margin-right: 10px!important;
      }
    }
    span {
      color: #000000 !important;
    }
  }
  .card {
    box-shadow: none !important;
    border: 1px solid #969698 !important;
    .card-header {
      padding: 0 22px !important;
      border-bottom: 1px solid #EAEDF3;
      .tabs-item {
        padding: 20px 0;
        margin-right: 47px;
        font-size: 16px;
        color: #6B6C6F;
        cursor: pointer;
        &.active-tabs-item {
          border-bottom: 3px solid #1665D8;
        }
      }
    }
    .card-body {
      padding: 22px !important;
      .title {
        font-size: 17px;
        font-weight: 500;
        font-family: 'Roboto', sans-serif;
        color: #3E3F42;
      }
      .description-block {
        .vue-editor {
          width: 100% !important;
          border: 1px solid #C6C6C6;
          border-radius: 0.25rem;
        }
      }
      .images-block {
        .bordered {
          padding: 80px 30px;
        }
        .img-block {
          width: 150px;
          height: 150px;
          align-items: center;
          justify-content: center;
        }
      }
      .variants-block {
        .bordered {
          padding: 30px;
          justify-content: space-between;
          .w-75 {
            width: 75%;
          }
          .variant {
            align-items: center;
            justify-content: space-between;
          }
          .img-block {
            border: 1px solid #ced4da;
            border-radius: 0.25rem;
            padding: 5px;
            background-color: #f0f0f091;
          }
        }
      }
      .landing-page-template,
      .package-design-block {
        .bordered {
          padding: 60px 40px;
        }
        .block {
          flex-direction: column;
        }
      }
      .bordered {
        border: 1px solid #ced4da;
        border-radius: 0.25rem;
        .block {
          height: 200px;
          width: 192px;
          align-items: center;
          justify-content: center;
          .badge-dark {
            background-color: #000B2C;
            padding: 6.5px 20px;
            font-size: 10px;
          }
        }
      }
      .package-design-block {
        .block {
          position: relative;
          &:hover {
            background-color: #F6F6F6;
            .edit-icon {
              display: block;
            }
          }
          .edit-icon {
            display: none;
            position: absolute;
            top: 5px;
            right: 5px;
          }
        }
      }
      .landing-page-template {
        label.switch {
          width: 100px;
          height: 30px;
          input[type="checkbox"] {
            + span {
              &:before {
                content: 'Activate';
              }
            }
          }
        }
      }
      .text-blue {
        color: #4087DC;
      }

      .form-control {
        border: 1px solid #C6C6C6;
      }

      .right-block {
        .bg-gray {
          padding: 18px 10px;
          background-color: #FAFAFA;
        }
        .multiselect__tags {
          border: 1px solid #C6C6C6;
        }
        .multiselect__tag-icon {
          border: 1px solid #fff;
          border-radius: 50%;
          width: 15px;
          height: 15px;
          font-size: 5px;
          padding: 0;
          margin: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          top: 2px;
          right: 2px;
        }
        .multiselect__tag-icon:after {
          color: #fff;
          font-size: 12px;
          margin: 0;
          padding: 0;
          font-weight: 100;
          display: block;
          line-height: 1;
        }

        .multiselect__tag-icon:hover {
          background: transparent;
        }


        .multiselect__tag {
          background-color: #000427;
          width: 135px;
          padding: 4px 26px 5px 18px;
          text-align: center;
          span {
            font-size: 10px;
          }
        }
        .category-block,
        .subcategory-block {
          .multiselect__tag {
            background-color: #EBEEF3;
            border: 1px solid #DDDFE5;

            .multiselect__tag-icon {
              border-color: #444;
            }
            span {
              color: #1D1D1F!important;
              font-weight: bold;
            }
            .multiselect__tag-icon {
              &:after {
                color: #1D1D1F
              }
            }
          }
        }

        .assignment-block {
          .custom-select {
            width: 100px;
            border: 1px solid #ced4da;
          }
          .flex-column {
            flex-direction: column;
          }
          .input-value {
            width: 52px;
          }
          .btn-add-location {
            background-color: #000B2C;
            height: 30px;
            padding: 0 7px;
            color: #fff;
          }
        }
        .deployment-block {
          .bg-gray {
            padding: 18px 42px 18px 20px;
          }
          label.switch {
            width: 100px;
            height: 30px;
            input[type="checkbox"] {
              + span {
                &:before {
                  content: 'Activate';
                }
              }
            }
          }
        }
        .btn-create {
          .btn {
            width: 100%;
            background-color: #000B2C!important;
            border: none!important;
          }
        }
      }
    }
  }

  @media (max-width: 991px) {
    .page-sidebar {
      margin-top: 0!important;
    }
  }

  @media (max-width: 768px) {
    .card-body {
      flex-direction: column;
      .col-md-5 {
        padding-left: 0;
        .right-block {
          margin-top: 20px;
        }
      }
    }
  }

  @media (max-width: 654px) {
    .card-header {
      ul {
        flex-direction: column;
      }
    }
    .card-body {
      .images-block {
        .bordered {
          padding: 20px !important;
          flex-direction: column!important;
          align-items: center;
          .img-block {
            margin-right: 0;
            margin-bottom: 15px;
            &:last-child {
              margin-bottom: 0;
            }
          }
        }
      }
      .package-design-block,
      .landing-page-template {
        .bordered {
          padding: 20px !important;
          flex-direction: column!important;
          align-items: center;
        }
        .block {
          margin-right: 0;
          margin-bottom: 15px;
        }
      }
      .variant {
        flex-direction: column;
        align-items: flex-start!important;
      }
    }
  }

</style>
