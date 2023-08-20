"use client";

import React, { useState } from "react";
import FormBox from "./components/FormBox";
import Modal from "./components/Modal";
import { PencilIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const UserPage = () => {
  const initialData = {
    aboutme: "",
    firstname: "",
    lastname: "",
    register: "",
    birthdate: "",
    gender: "",
    number: "",
    job: "",
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState(initialData);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const changeModal = (e: any) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const router = useRouter();
  const sentCV = async (e: any) => {
    e.preventDefault();
    if (!formData) return;
    console.log(formData);

    const response = await fetch("http://localhost:3000/api/CV", {
      method: "POST",
      body: JSON.stringify({ data: formData }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    if (response.status === 201) {
      toast.success("Амжилттай илгээгдлээ");
      router.push("/");
    }

    console.log(data);
  };

  return (
    <div className="w-10/12 mx-auto">
      <p className="text-3xl font-bold m-5">Миний анкет</p>
      <Modal isOpen={modalIsOpen} onClose={closeModal}>
        <form onChange={changeModal}>
          <div className="border-b border-gray-900/10 ">
            <div className="grid grid-cols-1 gap-x-4  gap-y-4 sm:grid-cols-8">
              <p className="text-lg text-center col-span-full text-indigo-600 font-bold">
                ЕРӨНХИЙ МЭДЭЭЛЭЛ
              </p>
              <div className="sm:col-span-full">
                <label className="text-sm font-medium leading-6 text-gray-900">
                  Миний тухай:
                </label>
                <input
                  type="textarea"
                  name="aboutme"
                  value={formData.aboutme}
                  id="aboutme"
                  className="w-full rounded-md py-1.5 text-gray-900 sm:text-sm ring-1 ring-gray-300 focus:bg-gray-100 h-20 text-ellipsis"
                />
              </div>
              <div className="sm:col-span-4">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Эцэг/Эхийн нэр:
                </label>
                <input
                  value={formData.firstname}
                  type="text"
                  name="firstname"
                  id="firstname"
                  className="w-full rounded-md py-1.5 sm:text-sm ring-1 ring-gray-300 focus:bg-gray-100"
                />
              </div>
              <div className="sm:col-span-4">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Өөрийн нэр:
                </label>
                <input
                  type="text"
                  value={formData.lastname}
                  name="lastname"
                  className="w-full rounded-md py-1.5 text-gray-900 sm:text-sm ring-1 ring-gray-300 focus:bg-gray-100"
                />
              </div>

              <div className="sm:col-span-4">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Регистерийн дугаар:
                </label>
                <input
                  id="register"
                  name="register"
                  value={formData.register}
                  type="text"
                  className="w-full rounded-md py-1.5 text-gray-900 sm:text-sm ring-1 ring-gray-300 focus:bg-gray-100"
                />
              </div>

              <div className="sm:col-span-4">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Хүйс:
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  className="w-full rounded-md py-1.5 text-gray-900 sm:text-sm ring-1 ring-gray-300 focus:bg-gray-100"
                >
                  <option>Сонгох</option>
                  <option>Эрэгтэй</option>
                  <option>Эмэгтэй</option>
                  <option>Бусад</option>
                </select>
              </div>

              <div className="col-span-full">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Төрсөн огноо:
                </label>
                <input
                  type="date"
                  value={formData.birthdate}
                  name="birthdate"
                  id="birthdate"
                  className="w-full rounded-md py-1.5 text-gray-900 sm:text-sm ring-1 ring-gray-300 focus:bg-gray-200"
                />
              </div>
              <div className="sm:col-span-4">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Утасны дугаар:
                </label>
                <input
                  id="number"
                  name="number"
                  value={formData.number}
                  type="text"
                  className="w-full rounded-md py-1.5 text-gray-900 sm:text-sm ring-1 ring-gray-300 focus:bg-gray-100"
                />
              </div>
              <div className="sm:col-span-4">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Мэргэжилийн чиглэл:
                </label>
                <select
                  id="job"
                  name="job"
                  value={formData.job}
                  className="w-full rounded-md py-1.5 text-gray-900 sm:text-sm ring-1 ring-gray-300 focus:bg-gray-100"
                >
                  <option>Хүний нөөц/захиргаа</option>
                  <option>Хууль, эрх зүй/Нийцэл</option>
                  <option>Санхүү/Бүртгэл</option>
                  <option>Удирдлага</option>
                  <option>Тээвэр ложистик</option>
                  <option>Маркетинг/Борлуулалт</option>
                  <option>Мэдээллийн технологи/Програм хангамж</option>
                  <option>Инженер техник/Инженеринг</option>
                  <option>Үйлчилгээ</option>
                </select>
              </div>
            </div>
          </div>
        </form>
      </Modal>

      <div className="space-y-6">
        <FormBox>
          <button
            type="button"
            onClick={openModal}
            className="space-x-2 p-2 bg-gray-200 rounded-full hover:bg-indigo-500 transition float-right"
          >
            <PencilIcon className="h-7 w-7" aria-hidden="true" />
          </button>
          <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">
            <div className="col-span-full">
              <label className="font-bold">Миний тухай</label>
              <p className="h-fit">{formData.aboutme}</p>
            </div>
            <div className="col-span-3">
              <label className="font-bold">Эцэг/Эхийн нэр</label>
              <p>{formData.firstname}</p>
            </div>
            <div className="col-span-3">
              <label className="font-bold">Өөрийн нэр</label>
              <p>{formData.lastname}</p>
            </div>
            <div className="col-span-3">
              <label className="font-bold">Регистерийн дугаар</label>
              <p>{formData.register}</p>
            </div>
            <div className="col-span-3">
              <label className="font-bold">Хүйс</label>
              <p>{formData.gender}</p>
            </div>
            <div className="col-span-3">
              <label className="font-bold">Төрсөн огноо</label>
              <p>{formData.birthdate}</p>
            </div>
            <div className="col-span-3">
              <label className="font-bold"> Утасны дугаар</label>
              <p>{formData.number}</p>
            </div>
            <div className="col-span-3">
              <label className="font-bold"> Мэргэжилийн чиглэл</label>
              <p>{formData.job}</p>
            </div>
          </div>
        </FormBox>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={sentCV}
        >
          Хадгалах
        </button>
      </div>
    </div>
  );
};

export default UserPage;
